const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/Admin');
const shopRoutes = require('./routes/Shop');

const errorController = require('./controllers/error');

//  ** MIDDLEWARE ZONE **
app.use(bodyParser.urlencoded({extended: false})); // Parses req.body
app.use(express.static(path.join(__dirname, 'public'))); // Express middleware to serve static files

// app.use((req, res, next) => {
//   console.log('1. Inside Middleware'); // Always runs
//   next(); // Allows request to continue to the next middleware
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

//  ** MIDDLEWARE ZONE **

app.listen(3000);