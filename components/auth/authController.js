const config = require('config')
const authService = require('./authService')
const SECRET_ACCESS_TOKEN = config.get('auth.secret_access_token')
const SECRET_ACCESS_TOKEN_EXPIRE = config.get('auth.secret_access_token_expire')
const SECRET_REFRESH_ACCESS_TOKEN = config.get(
    'auth.secret_refresh_access_token'
)
const SECRET_REFRESH_ACCESS_TOKEN_EXPIRE = config.get(
    'auth.secret_refresh_access_token_expire'
)

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!(email && password)) {
            res.status(400).send('All input is required')
        }

        if (authService.isExist(email)) {
            const user = await getUser(email)
            if (authService.isValidPassword(password, user.password)) {
                const token = jwt.sign(
                    { user_id: user._id, email },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: SECRET_ACCESS_TOKEN_EXPIRE,
                    }
                )
                res.json(token)
            } else {
                res.json({ msg: 'Wrong password' })
            }
        } else {
            console.log('Login false')
        }
    } catch (err) {}
}

exports.register = async (req, res) => {
    const newUser = req.body

    if (await authService.isExist(newUser.email)) {
        res.json({
            msg: 'There is an account used this email address! Can not creat new user',
        })
    }
    const user = await authService.createUser(newUser)
    res.json(user)
}

exports.changeInfo = async (req, res) => {
    const userId = req.params.id
    const updateUser = req.body

    if (await authService.isExist(updateUser.email)) {
        const user = await authService.updateUser(userId, updateUser)
        res.json(user)
    }
    res.json({
        msg: 'This user is not existed!',
    })
}

exports.getList = async (req, res) => {
    const users = await authService.getList()
    res.json(users)
}
