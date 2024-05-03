const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const userSchema = mongoose.Schema({
    name: {
        type:  String,
        required: [true, "Por favor teclea tu nombre"]
    },
    email: {
        type: String,
        required: [true, "Por favor teclea tu email"],
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: [true, "Por favor teclea tu numero"]
    }

});


const User = mongoose.model('User', userSchema );

module.exports = {
    User
};

