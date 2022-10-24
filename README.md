# Board Game API

### Description
This project is a RESTful API created using Node.js. Using a MongoDB database, the API has routes to start a new game, provide the main game screen data, add a player and let a player take their turn. The application uses middleware to ensure only the person who's go it is can roll the dice. 

### Dependencies
``` 
- node version 16.15.1
- express version 4.18.1 
- nodemon version 2.0.20
- npm version 8.11.0
- mongodb version 4.10.0
```

### Installing
Clone this repo:
```
git@github.com:aidanmaskell/boardgame-api.git
```
Navigate into the newly created repo:
```
cd boardgame-api
```
From the root of the project run:
```
npm install
```
Set up a new MongoDB database and connect it in:
```
Services/dbService.js
```

Test using Postman and/or build a front end for it!

### Authors
- Aidan Maskell - [@aidanmaskell](github.com/aidanmaskell)
