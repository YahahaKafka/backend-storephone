const express = require('express');
const router = express.Router();
const adminController = require('../controllers/AdminController');
const authMiddleware = require('../middleware/auth');

router.post('/login', adminController.login);
router.get('/products', authMiddleware, adminController.getAllProducts);
router.post('/products', authMiddleware, adminController.createProduct);
router.put('/products/:id', authMiddleware, adminController.updateProduct);
router.delete('/products/:id', authMiddleware, adminController.deleteProduct);

module.exports = router;
