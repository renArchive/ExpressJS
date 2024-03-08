const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  // __dirname containsthe absolute path of the current file (were it is used)
  // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
  
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;