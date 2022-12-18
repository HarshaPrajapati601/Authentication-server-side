const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        unique: 6
    },
    password: {
        type: String,
        minLength: 6,
        required: true
    }
});
const User = mongoose.model('UserModel', userSchema);
module.exports = { User };