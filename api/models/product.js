const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.SchemaTypes.ObjectId,
    name: { type: String },
    price: { type: Number },
    description: { type: String },
    productImage: { type: String }
});

module.exports = mongoose.model('Product', productSchema);