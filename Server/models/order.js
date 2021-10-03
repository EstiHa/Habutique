const mongoose = require('mongoose');

let orderSchema = mongoose.Schema({
    cart:[{
        productId:
        {
            type: String,
        },
        name: {
            type: String,
        },
        company: {
            type: String,
        },
        link: {
            type: String,
        },
        cost: {
            type: Number,
        },
    }],
    account: {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        password2: {
            type: String,
            required: true
        }
    },
    user: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
        },
        contactNo: {
            type: String,
        },
        address: {
            type: String,
        }
    },
    payment: {
        ownerName: {
            type: String,
        },
        cardNumber: {
            type: String,
        },
        month: {
            type: String,
        },
        year: {
            type: String,
        },
        cvc: {
            type: String,
        },
    }

})

let Order = module.exports = mongoose.model('orders', orderSchema);