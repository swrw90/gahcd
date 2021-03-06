const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

let productRoutes = require('./api/routes/products');
const uri = 'mongodb://localhost:27017/gahcd';

mongoose.connect(uri);

mongoose.Promise = global.Promise;

app.use(morgan('dev'));

app.use('/uploads', express.static('uploads'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        req.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({});
    }
    next();
});

app.use('/products', productRoutes);
// app.use('/contact')
// app.use('/user');

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    console.log('Error: Not Found');
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        }
    });
});

module.exports = app;