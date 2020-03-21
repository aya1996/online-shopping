const mongoose = require('mongoose');
//user module
const Camera = mongoose.model('Cameras', {
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

module.exports = Camera;


