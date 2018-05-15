const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User SCHEMA
const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema);

User.addUser = (user, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(user.password, salt, (err, hash) =>{
            if (err) throw err;
            user.password = hash;
            console.log('hashed: ' + hash);
            user.save(callback);
        });
    });
};


module.exports = User;