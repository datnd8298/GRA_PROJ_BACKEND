const bCrypt = require('bcryptjs')

exports.isValidPassword = (userpass, password) => {
    return bCrypt.compareSync(userpass, password)
}