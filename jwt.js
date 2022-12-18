// JSON web token
const { MD5 } = require('crypto-js');

const user = {
    id: 1,
    token: MD5('password123').toString()
}

console.log("user", user)
// user { id: 1, token: '482c811da5d5b4bc6d497ffa98491e38' }