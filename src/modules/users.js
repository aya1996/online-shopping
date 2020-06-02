const mongoose = require('mongoose');
//user module
const User = mongoose.model('User', {
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 0
    },
    password: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        default: 'N/A'
    
    },
    img: {
        type: String
        
    }
});

module.exports = User;


