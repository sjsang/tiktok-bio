const express = require('express');
const upload = require('../middleware/uploadMiddleware');
const productController = require('../controller/productController');

const router = express.Router();

router.post('/', upload.single('image'), productController.create);
router.get('/', productController.getAll);
router.delete('/:id', productController.destroy);

module.exports = router;
