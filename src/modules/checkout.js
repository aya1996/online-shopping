const mongoose = require('mongoose');
//user module
const   Checkout = mongoose.model('Checkout', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
  
   
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    }
});

module.exports = Checkout;


