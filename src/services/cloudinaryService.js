const cloudinary = require('../config/cloudinary');

const uploadImageToCloudinary = async (file) => {
    if (!file || !file.buffer) {
        throw new Error('Không có file ảnh để upload');
    }

    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder: process.env.CLOUDINARY_FOLDER || 'bio-products',
                resource_type: 'image',
            },
            (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve({
                    url: result.secure_url,
                    publicId: result.public_id,
                    width: result.width,
                    height: result.height,
                });
            }
        );

        stream.end(file.buffer);
    });
};

module.exports = {
    uploadImageToCloudinary,
};
