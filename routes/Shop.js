const express = require('express');
// const path = require('path');

// const rootDir = require('../util/path');
const adminData = require('./Admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  // __dirname containsthe absolute path of the current file (were it is used)
  // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
  
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });

  // Serve static HTML file
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;