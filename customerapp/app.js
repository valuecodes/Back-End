var express = require('express');
var bodyParser=require('body-parser');
var path =require('path');
var expressValidator=require('express-validator');

var app=express();

// Middleware Väliohjelmisto
// var logger=function(req,res,next){
//     console.log('Logging...');
//     next();
// };

// app.use(logger);

// View Engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static Path
app.use(express.static(path.join(__dirname,'public')))



// var people=[
//     {
//     name:"Geoff",
//     age:30
//     },
//     {
//     name:"Sara",
//     age:25
//     },
//     ,
//     {
//     name:"Bill",
//     age:40
//     }
// ];

// app.get('/',function(req,res){
//     res.json(people);
// });

var users=[
    {
        id:1,
        first_name:'John',
        last_name:'Doe',
        email:'John@gmail.com'
    },
    {
        id:2,
        first_name:'Juha',
        last_name:'Kangas',
        email:'Juha@gmail.com'
    },
    {
        id:3,
        first_name:'Sara',
        last_name:'Gill',
        email:'Sara@gmail.com'
    }
]

app.get('/',function(req,res){
    res.render('index',{
        title:'Customers',
        users:users
    });
});

app.post('/users/add',function(req,res){
    var newUser={
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email_name: req.body.email
    }
    console.log(newUser);
});

app.listen(3000,function(){
    console.log('Server Started on Port 3000');
})