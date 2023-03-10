const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_I = 10;
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
   
})

// basically the pre save runs like this
//  userDetails.presave.save((err, doc) 
const User = mongoose.model('UserModel', userSchema);
module.exports = { User };