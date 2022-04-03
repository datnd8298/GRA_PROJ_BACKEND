const mongoose = require('mongoose')

const userTokenSchema = new mongoose.Schema({
    user_id: [{ type: Schema.Types.ObjectId, ref: 'user', required: true, unique: true }],
    refresh_token: { type: String, unique: true, required: true },
})

module.exports = mongoose.model('userToken', userTokenSchema)