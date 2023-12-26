const mongoose = require('mongoose');
const conn = require('../config/db');
const bcrypt = require('bcryptjs');

var regisProdSchema = new mongoose.Schema({
    name: String,
    email: String,
    userID: String,
    product: [
        {
            model: {
                type:String,
            },
            serial_no: {
                type:String,
                unique: true,
            },
            purchase_place:{
                type:String,
            },
            purchase_date:{
                type:String,
            },
            purchase_proof: {
                type:String,
            },
        },
    ],
}, {
    timestamps: true
});

let productRegister = conn.model('productRegister', regisProdSchema);

module.exports = productRegister;