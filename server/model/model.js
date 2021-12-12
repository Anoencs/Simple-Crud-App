const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    ISBN : {
        type : String,
    },
    name : {
        type: String,
    },
    price : String,
    author : String,
    quantity: String,
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;