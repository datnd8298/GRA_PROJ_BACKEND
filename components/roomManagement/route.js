const express = require('express');
const roomController = require('./roomController')

module.exports = (app) => {
    const router = express.Router();

    router.get('/room', roomController.getList)
    router.post('/room/:id', roomController.changeInfo)
    router.get('/room/:id', roomController.getDetail)
    router.get('/room/:id/delete', roomController.deleteroom)
    
    app.use('/api', router);
};
