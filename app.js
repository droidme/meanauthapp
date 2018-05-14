const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');


const app = express();
const port = 3000;

// routes
const userRoutes = require('./routes/users');

// CORS Middleware
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// route middleware
app.use('/users', userRoutes);

// start server
app.listen(port, ()=>console.log('listening on port ' + port));