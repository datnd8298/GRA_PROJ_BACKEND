const userService = require('./userService')

exports.changeInfo = async (req, res) => {
    try {
        const userId = req.params.id
        const updateUser = req.body

        if (await authService.isExist(updateUser.email)) {
            const user = await userService.updateUser(userId, updateUser)
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
