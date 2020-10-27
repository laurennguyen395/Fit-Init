require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const session = require('express-session')
const flash = require('connect-flash');
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const axios = require('axios')
const methodOverride = require('method-override')
const apiKey = '34e71e65fea4bd5480247027ff3d653d33f1961f'
const app = express();
const db = require('./models')

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

// use method override to handle PUT and DELETE requests elegantly
app.use(methodOverride('_method'))


app.use((req, res, next) => {
  // before every route, attach the flash messages and current user to res.locals
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});


// Homepage
app.get('/', (req, res) => {
  res.render('index');
});

app.use('/auth', require('./routes/auth'));
app.use('/', require('./routes/workout'))

var server = app.listen(process.env.PORT || 3000, () => console.log(`🎧You're listening to the smooth sounds of port ${process.env.PORT || 3000}🎧`));

module.exports = server;
