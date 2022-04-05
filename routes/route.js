const authApiRouter = require('../components/auth/route')
const userApiRouter = require('../components/user/route')

const routerManager = (app) => {
    authApiRouter(app)
    userApiRouter(app)
}

module.exports = routerManager