
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



