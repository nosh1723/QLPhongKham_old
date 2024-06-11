const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    description: { type: String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Service', ServiceSchema);
