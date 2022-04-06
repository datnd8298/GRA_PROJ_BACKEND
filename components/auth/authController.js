const config = require('config')
const authService = require('./authService')
const userService = require('../user/userService')
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

        if (userService.isExist(email)) {
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
    try {
        const newUser = req.body

        if (await userService.isExist({ email: newUser.email })) {
            res.json({
                msg: 'There is an account used this email address! Can not creat new user',
            })
        }
        const user = await authService.createUser(newUser)
        res.json(user)
    } catch (e) {
        console.log(e)
        throw e
    }
}
