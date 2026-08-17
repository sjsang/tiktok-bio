const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../model/User');

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Tên đăng nhập không tồn tại' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Mật khẩu không đúng' });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '30d' });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi máy chủ' + error.message });
    }
};

const getUserInfo = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

        if (!user) {
            return res.status(404).json({ message: 'Người dùng không tồn tại' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi máy chủ' + error.message });
    }
};

module.exports = {
    login,
    getUserInfo
};