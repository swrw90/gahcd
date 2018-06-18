const Product = require('../models/product');
const mongoose = require('mongoose');

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
