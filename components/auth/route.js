const express = require('express');
const authController = require('./authController');

module.exports = (app) => {
    const router = express.Router();

    router.post('/login', authController.login)
    router.post('/register', authController.register)
    router.get('/users', authController.getList)
    
    app.use('/api', router);
};
