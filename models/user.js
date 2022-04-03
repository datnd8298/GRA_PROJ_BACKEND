const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    user_type: { type: Number, enum: [0, 1], default: 1, required: true },
    first_name: { type: String, required: true, default: null },
    last_name: { type: String, required: true, default: null },
    per_id: { type: String, unique: true, default: null },
    gender: { type: String, enum: ["MALE", "FEMALE", "OTHER"], default: "OTHER" },
    phone: { type: String, default: null },
    dob: { type: Date, default: null },
    address: { type: String, default: null },
    position: { type: String, enum: [ 'receiptionist', 'customer_manager', 'chef', 'cook', 'accountant', 'labor', 'room_service' ], default: 'receiptionist'},
    start_working: { type: Date, default: null },
})

module.exports = mongoose.model('user', userSchema)