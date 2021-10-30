/* 
File name      : app.js
Student’s Name : Asmae Allou  
StudentID      : 301159608
Date           : 30-10-2021
*/

//Third-party packages
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

//models for auth
let session = require('express-session');
let passport = require('passport');
let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;
let flash = require('connect-flash');





//database set up
let mongoose = require('mongoose');
let DB = require('./db');

//point mongoos to db uri
mongoose.connect(DB.URI);

let mongoDB = mongoose.connection;

mongoDB.on('error', console.error.bind(console, 'Connection Error:'));

mongoDB.once('open', ()=>{
  console.log('Connected to MongoDB...');
});


let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');

//define new routes
//let loginRouter = require('../routes/login')
let contactsRouter = require('../routes/contacts')

let app = express();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs'); 


app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));

//We use this to make the path link look neat
app.use(express.static(path.join(__dirname, '../../node_modules')));

//setup express session

app.use(session({
  secret:"someSecret",
  saveUninitialized:false,
  resave: false
}))

//initialize flash
app.use(flash());

//init passport
app.use(passport.initialize())
app.use(passport.session());

//usermodel
let userModel = require('../models/user')
let User = userModel.User;

//implement a User Authentication Strategy
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/', indexRouter);
app.use('/users', usersRouter);

//use new routes
//app.use('/login',loginRouter);
app.use('/contact-list',contactsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error'});
});


module.exports = app;
