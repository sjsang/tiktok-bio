require('dotenv').config();
const path = require("path");
const express = require('express');
const cors = require('cors');
const multer = require('multer');

const connectDB = require('./config/db');
connectDB();

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        return res.status(400).json({ message: err.message });
    }

    if (err) {
        return res.status(400).json({ message: err.message || 'Upload thất bại' });
    }

    next();
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
});

// app.use(express.static(path.join(__dirname, "dist")));

// app.use((req, res) => {
//     res.sendFile(path.join(__dirname, "dist", "index.html"));
// });