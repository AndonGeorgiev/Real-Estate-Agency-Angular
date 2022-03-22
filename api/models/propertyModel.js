const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title: {
        type: 'string',
        required: [true, 'The input title is required!'],
    },

    img: {
        type: 'string',
        required: [true, 'The input img is required!'],
    },

    price: {
        type: number,
        required: [true, 'The input price is required!'],
    },

    address: {
        type: number,
        required: [true, 'The input address is required!'],
    },

    description: {
        type: 'string',
        required: [true, 'The input description is required!'],
    },

    broker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],


});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;