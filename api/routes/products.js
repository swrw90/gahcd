const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ProductsController = require('../controllers/products');

router.get('/', ProductsController.get_all_products);

module.exports = router;