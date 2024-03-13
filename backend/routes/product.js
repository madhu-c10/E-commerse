const express = require('express');
const { getProducts, singleProduct } = require('../controllers/productController');
const router=express.Router();

router.route("/products").get(getProducts);
router.route('/products/:id').get(singleProduct)

module.exports = router