const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_I = 10;
const jwt = require('jsonwebtoken');
let id = 200;
let secret = 'superSecretCodeOnlyStoredOnServer';
//3. so the user is going to go through this schema first before getting saved in the monngo db
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
    },
    token: {
        type: String
    }
});

userSchema.pre('save', function(next){
    var user = this;
    // only when we modify password we hash the password
    if (user.isModified('password')) {
        bcrypt.genSalt(SALT_I, (err, salt) => {
            if (err) return next(err);
            bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) return false;
                // modifying the document before we are saving it
                user.password = hash;
                next(); //move forward to next 
    
            })
        });
    } else {
        next(); //move forward to next
    }
   
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if(err) cb(err);
    cb(null, isMatch)

    })
}

userSchema.methods.generateToken = function(cb) {
    var user = this;
    var token = jwt.sign(user._id.toHexString(), secret);
    user.token = token;
    // TO SAVE THE TOKEN in the mongo db
    user.save(function(err, user){
        if(err) return cb(err);
        return cb(null, user)
    })
}

// basically the pre save runs like this
//  userDetails.preSave.save((err, doc) 
const User = mongoose.model('UserModel', userSchema);
module.exports = { User };