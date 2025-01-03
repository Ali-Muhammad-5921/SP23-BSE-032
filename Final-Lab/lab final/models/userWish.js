const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] // Reference to products
});

module.exports = mongoose.model('User', userSchema);
