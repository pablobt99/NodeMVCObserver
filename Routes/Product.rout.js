const express = require('express')
const router = express.Router();
const createError = require('http-errors');
const mongoose = require('mongoose');

const Product = require('../Models/Product.model');
const ProductControler = require('../Controlers/Product.controler');

router.get('/', ProductControler.getAllProducts);

router.post('/', ProductControler.createProduct);
router.get('/:id', ProductControler.findProductById);
router.patch('/:id', ProductControler.updateProduct);
router.delete('/:id', ProductControler.deleteProduct);

module.exports = router;