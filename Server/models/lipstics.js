const mongoose = require('mongoose');

let lipsticSchema = mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    colors: { 
        type : Array, 
        default : []
    },
    description: {
        type: String,
        required: true
    }
});

let Lipstics = module.exports = mongoose.model('Lipstics', lipsticSchema);