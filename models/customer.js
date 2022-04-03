const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    email: { type: String },
    first_name: { type: String, required: true, default: null },
    last_name: { type: String, required: true, default: null },
    perId: { type: String, unique: true, default: null },
    gender: { type: String, enum: ["MALE", "FEMALE", "Other"] },
    phone: { type: String, default: null },
    dob: { type: Date, default: null },
})

module.exports = mongoose.model('customer', customerSchema)