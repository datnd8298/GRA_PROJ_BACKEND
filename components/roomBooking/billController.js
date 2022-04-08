const bill = require('../../models/bill')
const billService = require('./billService')

exports.changeInfo = async (req, res) => {
    try {
        const id = req.params.id
        const update_bill = req.body

        if (await billService.isExist(update_bill.email)) {
            const bill = await billService.updateBill(id, update_bill)
            res.json(bill)
        }
        res.json({
            msg: 'This bill is not existed!',
        })
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.getList = async (req, res) => {
    try {
        const { query } = req
        const bills = await billService.getList(query)
        res.json(bills)
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.getDetail = async (req, res) => {
    try {
        const id = req.params.id
        const bill = await billService.getDetail(id)
        res.json(bill)
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.deleteBill = async (req, res) => {
    try {
        const id = req.params.id
        if (billService.isExist(id)) {
            const bill = await billService.deleteBill(id)
            if (bill) {
                res.json({msg: 'bill has been deleted'})
            }
            res.json('Delete failed')
        }
        res.json({msg: 'There is no bill matching this id'})
    } catch (e) {
        console.log(e);
        throw e
    }
}
