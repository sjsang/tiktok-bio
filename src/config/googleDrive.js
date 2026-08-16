const { google } = require('googleapis');

const getServiceAccount = () => {
    const jsonString = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

    if (jsonString) {
        try {
            return JSON.parse(jsonString);
        } catch (error) {
            throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON không hợp lệ');
        }
    }

    if (!process.env.GOOGLE_DRIVE_CLIENT_EMAIL || !process.env.GOOGLE_DRIVE_PRIVATE_KEY) {
        throw new Error('Thiếu thông tin Google Drive. Hãy cấu hình GOOGLE_DRIVE_CLIENT_EMAIL và GOOGLE_DRIVE_PRIVATE_KEY');
    }

    return {
        client_email: process.env.GOOGLE_DRIVE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_DRIVE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    };
};

const getDriveClient = async () => {
    const serviceAccount = getServiceAccount();

    const auth = new google.auth.GoogleAuth({
        credentials: serviceAccount,
        scopes: ['https://www.googleapis.com/auth/drive'],
    });

    return google.drive({ version: 'v3', auth });
};

module.exports = {
    getDriveClient,
};
