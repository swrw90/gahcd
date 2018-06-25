const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.SchemaTypes.ObjectId,
    name: { type: String, required: true },
    price: { type: Number },
    description: { type: String },
    productImage: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);