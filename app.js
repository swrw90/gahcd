const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


app.use('/products');
app.use('/contact')
app.use('user');

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