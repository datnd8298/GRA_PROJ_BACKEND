const User = require('../../models/user')

exports.isExist = async (filter) => {
    try {
        const user = await User.findOne(filter)
        if (user) return true
        return false
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.getUser = async (email) => {
    try {
        const user = await User.findOne(email)
        return user
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.createUser = async (newUser) => {
    try {
        const user = await User.create(newUser)
        return newUser
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.updateUser = async (userId, dataUser) => {
    try {
        const user = await User.findByIdAndUpdate(userId, dataUser, {
            new: true,
        })
        return user
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.getList = async (query) => {
    try {
        const { filter = {}, page = 0, size = 10 } = query
        const index = page * size
        const user = await User.find(filter, {}, { skip: index, limit: size })
        return user
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.getDetail = async (id) => {
    try {
        const user = await User.findById(id)
        return user
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.deleteUser = async (id) => {
    try {
        await User.findByIdAndDelete(id)
        const user = this.isExist(id)
        if (user) return false
        return true
    } catch (e) {
        console.log(e)
        throw e
    }
}
