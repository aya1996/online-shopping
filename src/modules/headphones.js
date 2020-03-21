const mongoose = require('mongoose');
//user module
const HeadPhones = mongoose.model('Headphones', {
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

module.exports = HeadPhones;


