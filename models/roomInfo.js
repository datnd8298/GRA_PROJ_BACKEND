const mongoose = require('mongoose')

const roomInfo = new mongoose.Schema({
    room_num: { type: String, unique: true, required: true },
    single_bed: { type: Number, required: true, default: 1 },
    doble_bed: { type: Number, required: true, default: 0 },
    status: { type: String, enum: [ 'free', 'hired', 'ordered' ], required: true, default: 'free' },
    price: { type: Number, required: true, default: 0 },
})

module.exports = mongoose.model('roomInfo', roomInfo)