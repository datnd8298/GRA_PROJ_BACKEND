const bCrypt = require('bcryptjs')
const User = require('../../models/user')

exports.isValidPassword = (userpass, password) => {
    return bCrypt.compareSync(userpass, password)
}

exports.isExist = async (email) => {
    try {
        const user = await User.findOne({ email })
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

exports.updateUser = async (dataUser) => {
    try {
        const user = await User.findOneAndUpdate(dataUser.email, dataUser, {
            new: true,
        })
        return user
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.getList = async () => {
    try {
        const user = await User.find({})
        return user
    } catch (e) {
        console.log(e)
        throw e
    }
}
