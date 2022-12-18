const express = require('express');
const Mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const bcrypt = require('bcrypt');

const mongoUri = 'mongodb+srv://harsha-auth:z7yu1Udo1Qugn9Dp@cluster0.vi7ylhq.mongodb.net/user-details-database?retryWrites=true&w=majority';
Mongoose.connect(mongoUri);

// MIDDLEWARE
app.use(bodyParser.json());

// IMPORTING MODELS
const { User } = require('./models/user');

// ROUTES

app.post('/api/register-users', (req, res) => {
    //1. Storing the user in DB
    const userDetails = new User({ //2. this is the instance of the above modal in User.js
        email: req.body.email,
        password: req.body.password
    });

    userDetails.save((err, doc) => { //the doc back from the db
        if(err)  res.status(400).send(err);
        // return res.json(doc);
        res.status(200).send(doc);
    })
})

    app.post('/api/register-users/login', (req, res) => {
        // 1. find the user, if good move forward
        User.findOne({'email': req.body.email}, (err, user) => {
            if (err)  res.status(400).send(err);
            if(!user) res.json({message: 'User not found'})
            // res.status(200).send(user);
            // 2. compare the password with the hash password on db and move forward() - using bcrypt
            bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                if (err) throw error;
                if(!isMatch) res.json({message: 'Bad Password'})
                res.status(200).send(isMatch);
            })
        });
        // 3. send the response
    })


const port = process.env.PORT || 3003;
app.listen(port); //listening to the port


//password -z7yu1Udo1Qugn9Dp 
//username - harsha-auth
