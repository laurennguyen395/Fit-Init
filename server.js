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



//API Key
function makeGetRequest(path) { 
    axios.get(path).then( 
        (response) => { 
            const exercise = response.data; 
            // console.log(exercise); 
            return exercise
        }, 
        (error) => { 
            console.log(error); 
        } 
    ); 
  }
makeGetRequest('https://wger.de/api/v2/exercise/?limit=387');  



//viewing an individual exercise
app.get('/exercise', isLoggedIn, (req, res) => {
  //get ids of exercise
  // const exerciseUrl = makeGetRequest(); 
  axios.get('https://wger.de/api/v2/exercise/?limit=387').then( (apiResponse) => {
    console.log(apiResponse.data) 
    res.render('exercise', { exercise: apiResponse.data })
  })
})

app.get('/detail', isLoggedIn, (req, res) => {
  //exercise details
  axios.get('https://wger.de/api/v2/exercise/?limit=387').then( (apiResponse) => {
    console.log(apiResponse.data) 
    res.render('detail', { exercise: apiResponse.data })
  })
})

// Home Workouts Page
app.get('/workout' , isLoggedIn, (req, res) => {
  res.render('workout')
})

// Individually chosen workouts
app.get('/workout/:id', isLoggedIn, (req, res) => {
  res.render('workout')
})

// Profile Page
app.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile');
});



app.get('/profile/:id', isLoggedIn, (req, res) => {
  res.render('profile');
});


// Journal Entries
app.get('/journal', isLoggedIn, (req, res) => {
  res.render('journal')
})

app.post('/journal', isLoggedIn, (req, res) => {
  res.render('journal')
})

app.delete('/journal', isLoggedIn, (req, res) => {
  res.send('we want to delete something here')
  // maybe: db.user_journal.destroy({
  // where: {
  // userId = '${user}
  //   }
  // })
})

app.use('/auth', require('./routes/auth'));

var server = app.listen(process.env.PORT || 3000, () => console.log(`🎧You're listening to the smooth sounds of port ${process.env.PORT || 3000}🎧`));

module.exports = server;
