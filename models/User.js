const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    role: {
        type: String,
        required: [true, 'Role is required'],
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    },
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
