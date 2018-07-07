const Product = require('../models/product');
const mongoose = require('mongoose');

//Get all producst
exports.get_all_products = (req, res, next) => {
    Product.find()
        .select('name price description quantity _id productImage')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                products: docs.map(doc => {
                    return {
                        name: doc.name,
                        price: doc.price,
                        description: doc.description,
                        productImage: doc.productImage,
                        _id: doc._id,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:5000/products/' + docs._id
                        }
                    }
                })
            }
            if (docs.length >= 0) {
                res.status(200).json(response);
            } else {
                res.status(404).json({
                    message: 'No entries found'
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: "Invalid"
            });
        });
}

//Get specific product

exports.get_product =  (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
    .select('name price description quantity _id productImage')
    .exec()
    .then(doc => {
        console.log("In the database", doc);
        if (doc) {
            res.status(200).json({
                product: doc,
                request: {
                    type: 'GET',
                    url: 'http://localhost:5000/products/'
                }
            });
        } else {
            res.status(404).json({
                message: 'Not Found'
            })
        }  
    })
    .catch(err => {
        res.status(500).json({
            error: 'Internal Error',
            message: 'Try again'
        })
    });
};

//Create a product

exports.create_product = (req, res, next) => {
    console.log(req.body.name + "Product created");
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description,
        // productImage: req.file.path
    });
    product.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Created product successfully',
            createdProduct: {
                name: result.name,
                price: result.price,
                quantity: result.quantity,
                description: result.description,
                _id: result._id,
                request: {
                    type: 'GET',
                    url: 'http://localhost:5000/products' + result._id
                }
            }
        });
    })
        .catch(err => {
            console.log(err + { message: "error" });
            res.status(500).json({
                error: err,
                message: "received error"
            });
        });
}

//Update a product

exports.update_product = (req, res, next) => {
    const id = req.params.productId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Product.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: 'Product Updated',
            request: {
                type: 'GET',
                url: 'http://localhost:5000/products/' + id
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err,
        });
    });
}