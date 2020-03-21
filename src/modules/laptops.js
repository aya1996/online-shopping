const mongoose = require('mongoose');
//user module
const Laptop = mongoose.model('Laptops', {
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

module.exports = Laptop;


