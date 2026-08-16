const Product = require('../model/Product');
const { uploadImageToCloudinary } = require('../services/cloudinaryService');

const create = async (req, res) => {
    try {
        const { name, affiliateUrl, affiliateCode } = req.body;
        const file = req.file;

        if (!name || !file) {
            return res.status(400).json({ message: 'Vui lòng nhập tên sản phẩm và chọn ảnh' });
        }

        const uploadedImage = await uploadImageToCloudinary(file);

        const newProduct = new Product({
            name,
            affiliateUrl,
            affiliateCode,
            image: uploadedImage.url,
        });

        await newProduct.save();

        res.status(201).json({
            message: 'Tạo sản phẩm thành công',
            data: newProduct,
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: error.message || 'Lỗi máy chủ',
        });
    }
};

const getAll = async (req, res) => {
    try {
        const { search } = req.query;
        let query = {};

        if (search) {
            query = {
                $or: [
                    { name: { $regex: search, $options: 'i' } },
                    { affiliateCode: { $regex: search, $options: 'i' } }
                ]
            };
        }

        const products = await Product.find(query);

        res.status(200).json({
            message: 'Lấy danh sách sản phẩm thành công',
            data: products
        })
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: error.message || 'Lỗi máy chủ',
        });
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, affiliateUrl, affiliateCode } = req.body;
        const file = req.file;

        if (!name || !affiliateUrl || !affiliateCode) {
            return res.status(400).json({
                message: 'Vui lòng nhập đầy đủ tên, liên kết và mã sản phẩm',
            });
        }

        const updateData = {
            name: name.trim(),
            affiliateUrl: affiliateUrl.trim(),
            affiliateCode: affiliateCode.trim(),
        };

        if (file) {
            const uploadedImage = await uploadImageToCloudinary(file);
            updateData.image = uploadedImage.url;
        }

        const updatedProduct = await Product.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({
                message: 'Không tìm thấy sản phẩm để cập nhật',
            });
        }

        res.status(200).json({
            message: 'Cập nhật sản phẩm thành công',
            data: updatedProduct,
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: error.message || 'Lỗi máy chủ',
        });
    }
};

const destroy = async (req, res) => {
    try {
        const { id } = req.params;

        await Product.findByIdAndDelete(id);

        res.status(200).json({
            message: 'Xóa sản phẩm thành công'
        })
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: error.message || 'Lỗi máy chủ',
        });
    }
}

module.exports = {
    create,
    getAll,
    update,
    destroy
};