const express = require('express');

const app = express();

//  ** MIDDLEWARE ZONE **
app.use((req, res, next) => {
  console.log('1. Inside Middleware'); // Always runs
  next(); // Allows request to continue to the next middleware
});

app.use('/products', (req, res, next) => {
  res.send('<h1>Hello From Products!</h1>');
});

app.use('/', (req, res, next) => {
  console.log('2. Inside Middleware');
  res.send('<h1>Hello From Express!</h1>');
});

//  ** MIDDLEWARE ZONE **

app.listen(3000);