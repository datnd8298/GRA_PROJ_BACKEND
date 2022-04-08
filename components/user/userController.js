const user = require('../../models/user')
const userService = require('./userService')

exports.changeInfo = async (req, res) => {
    try {
        const id = req.params.id
        const update_user = req.body

        if (await userService.isExist(updateUser.email)) {
            const user = await userService.updateUser(id, update_user)
            res.json(user)
        }
        res.json({
            msg: 'This user is not existed!',
        })
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.getList = async (req, res) => {
    try {
        const { query } = req
        const users = await userService.getList(query)
        res.json(users)
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.getDetail = async (req, res) => {
    try {
        const id = req.params.id
        const user = await userService.getDetail(id)
        res.json(user)
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        if (userService.isExist(id)) {
            const user = await userService.deleteUser(id)
            if (user) {
                res.json({msg: 'User has been deleted'})
            }
            res.json('Delete failed')
        }
        res.json({msg: 'There is no user matching this id'})
    } catch (e) {
        console.log(e);
        throw e
    }
}
