const mongoose = require('mongoose');
//user module
const Product = mongoose.model('Products', {
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

module.exports = Product;


