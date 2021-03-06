var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');


const session = require('express-session')
const passport = require('passport')
// load the env vars
require('dotenv').config();

//connect to the database with Mongoose
require('./config/database');

// configure Passport
require('./config/passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var courtsRouter = require('./routes/courts');
var teamsRouter = require('./routes/teams');
var matchesRouter = require('./routes/matches');
var weatherRouter = require('./routes/weather')
var apiRouter = require('./routes/api')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: 'Sports1wdvgy8123_090909',
  resave: false,
 saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session())
app.use(function (req, res, next) {
res.locals.user = req.user;
 // console.log(res.locals.user, req.user, "this the app use user.")
  next();
});



app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/matches', matchesRouter);
app.use('/users', usersRouter);
app.use('/teams', teamsRouter);
app.use('/courts', courtsRouter);
app.use('/weather', weatherRouter)
app.use('/api', apiRouter)

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
  res.render('error');
});


module.exports = app;
