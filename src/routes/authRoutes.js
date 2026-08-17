const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');

const {
    login,
    getUserInfo
} = require('../controller/authController');

router.post('/login', login);
router.get('/me', authMiddleware, getUserInfo);

module.exports = router;