const mongoose = require('mongoose');
//user module
const Cart = mongoose.model('Cart', {
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
  
   
    img: {
        type: String
        
    }
});

module.exports = Cart;


