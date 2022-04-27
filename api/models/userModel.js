const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    role: String,
    refreshToken: String,
    properties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;