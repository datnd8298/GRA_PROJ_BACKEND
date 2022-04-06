const express = require('express');
const userController = require('./userController')

module.exports = (app) => {
    const router = express.Router();

    router.get('/users', userController.getList)
    router.post('/users/:id', userController.changeInfo)
    
    app.use('/api', router);
};
