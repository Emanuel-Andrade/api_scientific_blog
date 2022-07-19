const express = require('express');

const userController = require('../controllers/userController');

const Router = express.Router();

// Users
Router.get('/users', userController.getAllUsers);
Router.post('/users', userController.createUser);

module.exports = Router;
