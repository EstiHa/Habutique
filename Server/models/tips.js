const mongoose = require('mongoose');

let tipsSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

let Tips = module.exports = mongoose.model('tips', tipsSchema);