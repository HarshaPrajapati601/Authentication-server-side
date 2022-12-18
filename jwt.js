// JSON web token
// const { MD5 } = require('crypto-js');

// const user = {
//     id: 1,
//     token: MD5('password123').toString()
// }

// console.log("user", user)
// user { id: 1, token: '482c811da5d5b4bc6d497ffa98491e38' }


const jwt = require('jsonwebtoken');
let id = 200;
let secret = 'superSecretCodeOnlyStoredOnServer';
//create a token - needs 2 params - something about user(email, or id or something) &
// super secret password of the server
const token = jwt.sign(id, secret);
console.log("token", token)

// Storing the token on cookie or browser

//verify the token - user needs validation
const decodeToken = jwt.verify(token, secret)
console.log("decodeToken", decodeToken)
