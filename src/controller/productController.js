const Product = require('../model/Product');
const { uploadImageToCloudinary } = require('../services/cloudinaryService');

const create = async (req, res) => {
    try {
        const { name, affiliateUrl } = req.body;
        const file = req.file;

        if (!name || !file) {
            return res.status(400).json({ message: 'Vui lòng nhập tên sản phẩm và chọn ảnh' });
        }

        const uploadedImage = await uploadImageToCloudinary(file);

        const newProduct = new Product({
            name,
            affiliateUrl,
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
            query.name = { $regex: search, $options: 'i' };
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
    destroy
};