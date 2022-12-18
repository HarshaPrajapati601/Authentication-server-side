
# Authentication-server-side
Registering a user, hashing passwords, login methods, using mongo db, Jwt's , Generating tokens and verify token 
- Json placeholder for fake apis - https://jsonplaceholder.typicode.com/

## steps to start
- `npm install express mongoose body-parser nodemon`

- start creating the server.js first

  <img width="480" alt="image" src="https://user-images.githubusercontent.com/56376002/208281595-acebc5bd-b3d7-42a4-8b94-f1b518b9c4dc.png">

- In package JSON add a start script
 `
 "start": "node server/server.js"
 `
- when we work local on dev-- we add nodemon 
   `"dev": "nodemon server/server.js"  `
   
- Adding schema to the mongoose (It's like a validation library)   
  <img width="545" alt="image" src="https://user-images.githubusercontent.com/56376002/208281699-d7ed8306-a983-4a31-80af-c289a43ea5b1.png">

- exporting the user to server, and bring the db to server
- go to mongodb cloud service -and create a db - from connect get the uri link 

  <img width="545" alt="image" src="https://user-images.githubusercontent.com/56376002/208282495-8766389c-247a-47a9-8f72-8027cfc0f069.png">

# Registering a user to db
 - Add it in the db
 - ROUTES CREATION and saving the user in db
 
 ## POSTMAN
 Now accessing the url through postman and making the post request there - and we get the response back from mongo
 
 <img width="505" alt="image" src="https://user-images.githubusercontent.com/56376002/208283024-758bd670-adc5-41ef-bffc-78f9fc873f72.png">

## HASHING PASSWORDS (####) later we can decode the password is real 
- so we store hash passwords
- Installation to decrypt
  `yarn add bcrypt`
  
  # Hashing the password with salt
- How the becrypt works is that is going to first generate a salt. [ A salt is a random data that we use to modify an encryption. ]
  So salt agian it's kind of a random string, a random hash, and it needs a number as well.
   steps 
   1. Genertaing the salt and deciding how many times we will do this
   2. now we are going to hash the password with the salt that we recieve here below
 
 
  <img width="529" alt="image" src="https://user-images.githubusercontent.com/56376002/208283392-3acb2489-df8f-498b-b5db-c5ae6ea078b7.png">
  
  3. and then the longer hash with the real password in it , we will store it in the db
  
  
  <img width="728" alt="image" src="https://user-images.githubusercontent.com/56376002/208283640-c68d2588-088a-4085-ae50-93f3c393e26b.png">

  
 - Now, when we want to store the user , we want to intercept in between somewhere ,  beofre saving the user
 - So , whatever user enters as a password and then we gonna hash it  , and we store the hash one instead of the real one
 - In User.js import the becrypt and genrate a salt then gernate a hash password
    1. Storing the user in DB
    2. UserModel - the instance of the above User modal in User.js
    3. so the user is going to go through this schema first before getting saved in the monngo db
    4. so we get middleware functions before or after getting the user saved in db (ex . userSchema.pre('save', fn(next)) runs before the main save to db
    5. // basically the pre save runs like this//  userDetails.presave.save((err, doc)  i.e like in between
    
    <img width="652" alt="image" src="https://user-images.githubusercontent.com/56376002/208285444-a6857f41-0155-4df2-8370-f544a725ea3a.png">

### Checking in postman
<img width="819" alt="image" src="https://user-images.githubusercontent.com/56376002/208285518-bfc0901f-ad8d-40d7-96ab-6bf5d244e0bc.png">

## User login (compare hash with real passwrod) - with becrypt
<img width="819" alt="image" src="https://user-images.githubusercontent.com/56376002/208286673-93b042db-6a6e-4d1f-a708-15c4398d5279.png">

Login route
<img width="819" alt="image" src="https://user-images.githubusercontent.com/56376002/208293252-64aecdb4-09d4-405f-949d-169d0f76ebc8.png">







