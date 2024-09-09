// console.log('server file is running');

// function add(a,b){
//     return a+b;

// }

// var result = add(27566,733);
// console.log(result);


// var add =(a,b) =>  a+b;

// var result = add(542,437);
// console.log(result);

// (function(){
//     console.log('prince is added');
// }) ();



// var fs = require('fs');
// var os = require('os');


// var user = os.userInfo();
// console.log(user);
// console.log(user.username);


// fs.appendFile('greeting.txt', 'Hi ' + user.username + '!\n',()=>{
//     console.log('file is created');
// });




// const notes =require('./notes.js');
// console.log('server file is available')

// var age =notes.age;

// var result = notes.addNumber(age+18,10);
// console.log(age);
// console.log('result is now ' + result);

 //console.log('server file is available')

// const jsonString = {"name":"john", "age":30,"city":"new York"};


const express = require('express')
const app = express(); 

app.get('/', function (req, res) {
  res.send('We have list of menus')
})

app.get('/chicken',(req,res)=>{
    res.send('sure sir. i would love to serve chicken')
})

app.get('/idli',(req,res)=>{
    var customized_idli = {
        name:'rava idli',
        size:'10 cm diameter',
        is_sambhar:true,
        is_chutney:false
    }
    res.send(customized_idli)
})

app.listen(3000, ()=>{
    console.log('listening on port 3000');
})
