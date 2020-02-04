const mongoose = require('mongoose');

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
        default: 'N/A',
        enum: ['M', 'F', 'N/A']
    },
    img: {
        type: String
        
    }
});

module.exports = User;


