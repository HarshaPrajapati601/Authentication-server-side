const bcrypt = require('bcrypt');

bcrypt.genSalt(10, (err, salt) => {
    if (err) return false;
    console.log("salt is ", salt)
    //salt is  $2b$10$aru.78bfiBudheyQVwRLT.
     //used to hash the real pasword with the generated salt 
    bcrypt.hash('test123', salt, (err, hash) => {
        if (err) return false;
        return   console.log("hash is ", hash)
        //hash is  $2b$10$H.Y3AS.fFoqqWY7in1pW.uexHsM.VHhtsmFedbDJJG7Ko02RtGvuq
    })

})