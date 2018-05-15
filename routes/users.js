const express = require('express');
const router = express.Router();

const User = require('../models/user');

// Register User
router.post('/register', (request, response, next) => {
    let user = new User({
        name: request.body.name,
        email: request.body.email,
        username: request.body.username,
        password: request.body.password
    })
    
    User.addUser(user, (error, saved) => {
        if (error) {
            response
                .status(403)
                .json({
                    user: user,
                    error: 'Failed to register user - ' + error
                });
        } else {
            response
                .status(200)
                .json(saved);
        }
    })
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');
});

// Profile
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

module.exports = router;