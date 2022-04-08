const express = require('express');
const billController = require('./billController')

module.exports = (app) => {
    const router = express.Router();

    router.get('/bill', billController.getList)
    router.post('/bill/:id', billController.changeInfo)
    router.get('/bill/:id', billController.getDetail)
    router.get('/bill/:id/delete', billController.deleteBill)
    
    app.use('/api', router);
};
