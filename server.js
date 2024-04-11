const express = require('express')
const app = express()
const db = require('./db');

const MenuItem = require('./models/MenuItem');
const bodyParser = require('body-parser');
app.use(bodyParser.json());





app.get('/', function (req, res) {
  res.send('Hello World s')
})

// Import the router files
const personRoutes   = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/MenuItemRoutes');

// Use the routers
app.use('/person',personRoutes);
app.use('/menu', menuItemRoutes);

app.listen(3000, () => {
    console.log('Listening on port 3000');
})








// const objectToConvert = {
//     name : "Alice",
//     age : 25
// }

// const json = JSON.stringify(objectToConvert);
// console.log(json);
// console.log(typeof json);
// const jsonString = '{"name": "john", "age" : 30, "city" : "New York"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);








// const notes = require('./notes.js');
// var _= require('lodash');

// var data = ['person', 'person', '1','2','4','5','god','5'];
// var unique = _.uniq(data);
// console.log(_.isString(1));
// console.log(unique);
// console.log(notes.addNumber(1,3));





// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();

// fs.appendFile('greeting.txt', 'Hi '+user.username + '!\n', () =>{
//     console.log('file is created');
// } )
// console.log(user.username);

// function add(a, b){
//     return a + b;
// }



// var add = (a,b) => a + b;
// var result = add(12,2);
// console.log(result);

// (function(){
//     console.log('Automatically runs');
// })();