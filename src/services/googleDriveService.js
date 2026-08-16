const { Readable } = require('stream');
const { getDriveClient } = require('../config/googleDrive');

const uploadImageToDrive = async (file) => {
    const drive = await getDriveClient();
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

    if (!file || !file.buffer) {
        throw new Error('Không có file ảnh để upload');
    }

    const fileMetadata = {
        name: file.originalname,
        parents: folderId ? [folderId] : undefined,
    };

    const media = {
        mimeType: file.mimetype,
        body: Readable.from(file.buffer),
    };

    const response = await drive.files.create({
        resource: fileMetadata,
        media,
        fields: 'id,name,webViewLink,webContentLink',
    });

    const fileId = response.data.id;

    await drive.permissions.create({
        fileId,
        requestBody: {
            role: 'reader',
            type: 'anyone',
        },
    });

    return {
        fileId,
        name: response.data.name,
        url: `https://drive.google.com/uc?export=view&id=${fileId}`,
        webViewLink: response.data.webViewLink,
    };
};

module.exports = {
    uploadImageToDrive,
};
