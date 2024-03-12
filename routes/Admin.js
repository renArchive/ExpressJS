const express = require('express');
// const path = require('path');

// const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product -> GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product',{
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });

  // Serve HTML file
  //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add</button></form>');
});

// /admin/add-product -> POST
router.post('/add-product', (req, res, next) => {
  products.push({title: req.body.title});
  res.redirect('/');
});

module.exports = {
  router,
  products
};