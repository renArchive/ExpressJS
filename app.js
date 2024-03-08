const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const adminRoutes = require('./routes/Admin');
const shopRoutes = require('./routes/Shop')


//  ** MIDDLEWARE ZONE **
app.use(bodyParser.urlencoded({extended: false})); // Parses req.body
app.use(express.static(path.join(__dirname, 'public'))); // Express middleware to serve static files

// app.use((req, res, next) => {
//   console.log('1. Inside Middleware'); // Always runs
//   next(); // Allows request to continue to the next middleware
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

//  ** MIDDLEWARE ZONE **

app.listen(3000);