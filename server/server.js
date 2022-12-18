const express = require('express');
const Mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const mongoUri = 'mongodb+srv://harsha-auth:z7yu1Udo1Qugn9Dp@cluster0.vi7ylhq.mongodb.net/user-details-database?retryWrites=true&w=majority';
Mongoose.connect(mongoUri);

// MIDDLEWARE
app.use(bodyParser.json());

// IMPORTING MODELS
const { User } = require('./models/user');

// ROUTES

app.post('/api/register-users', (req, res) => {
    const userDetails = new User({
        email: req.body.email,
        password: req.body.password
    });
    // saving it in the mongo DB
    userDetails.save((err, doc) => { //the doc back from the db
        if(err)  res.status(400).send(err);
        // return res.json(doc);
        res.status(200).send(doc);
    })
})

const port = process.env.PORT || 3003;
app.listen(port); //listening to the port


//password -z7yu1Udo1Qugn9Dp 
//username - harsha-auth
