const mongoose = require('mongoose');
const conn = require('../config/db');

var reqStatusSchema = new mongoose.Schema({
    title:String
});

let reqStatus = conn.model('requeststatus', reqStatusSchema);

module.exports = reqStatus;