const Bill = require('../../models/bill')

exports.isExist = async (filter) => {
    try {
        const bill = await bill.findOne(filter)
        if (bill) return true
        return false
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.getBill = async (email) => {
    try {
        const bill = await Bill.findOne(email)
        return bill
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.createBill = async (newbill) => {
    try {
        const bill = await Bill.create(newbill)
        return newbill
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.updateBill = async (id, dataBill) => {
    try {
        const bill = await Bill.findByIdAndUpdate(id, dataBill, {
            new: true,
        })
        return bill
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.getList = async (query) => {
    try {
        const { filter = {}, page = 0, size = 10 } = query
        const index = page * size
        const bill = await Bill.find(filter, {}, { skip: index, limit: size })
        return bill
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.getDetail = async (id) => {
    try {
        const bill = await Bill.findById(id)
        return bill
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.deletebill = async (id) => {
    try {
        await bill.findByIdAndDelete(id)
        const bill = this.isExist(id)
        if (bill) return false
        return true
    } catch (e) {
        console.log(e)
        throw e
    }
}
