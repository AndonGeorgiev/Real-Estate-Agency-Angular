const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    role: String,
    refreshToken: String,
    sells: {
        type: Number,
        default: 0,
    },

});

const User = mongoose.model('User', userSchema);

module.exports = User;