const layouts = require('express-ejs-layouts');
const isLoggedIn = require('../middleware/isLoggedIn');
const methodOverride = require('method-override')
const axios = require('axios')
const express = require('express')
const passport = require('../config/ppConfig')
const db = require('../models')
const sequelize = require('sequelize')
const router = express.Router()
const bodyParser = require("body-parser");
const workoutUrl = 'https://wger.de/api/v2/exercise/?limit=387'

router.use(methodOverride('_method'))

//API Call
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
    makeGetRequest(workoutUrl);
    
    
    // Home Workouts Page
    router.get('/workout', isLoggedIn, (req, res) => {
        db.workout.findAll().then(workout => {
            res.render('workout', {workout: workout})
        }) 
    })

//viewing an individual exercise
router.get('/exercise', isLoggedIn, (req, res) => {
    //get ids of exercise
    // const exerciseUrl = makeGetRequest(); 
    axios.get(workoutUrl).then((apiResponse) => {
        res.render('exercise', { exercise: apiResponse.data })
    })
})

router.get('/detail', isLoggedIn, (req, res) => {
    //exercise details
    axios.get(workoutUrl).then((apiResponse) => {
        res.render('detail', { exercise: apiResponse.data })
    })
})

// Daily Workouts
router.get('/monday', isLoggedIn, (req, res) => {
    //get ids of exercise
    // const exerciseUrl = makeGetRequest(); 
    axios.get(workoutUrl).then((apiResponse) => {
        res.render('./weekdays/monday', { exercise: apiResponse.data })
    })
})
router.get('/tuesday', isLoggedIn, (req, res) => {
    //get ids of exercise
    // const exerciseUrl = makeGetRequest(); 
    axios.get(workoutUrl).then((apiResponse) => {
        res.render('./weekdays/tuesday', { exercise: apiResponse.data })
    })
})
router.get('/wednesday', isLoggedIn, (req, res) => {
    //get ids of exercise
    // const exerciseUrl = makeGetRequest(); 
    axios.get(workoutUrl).then((apiResponse) => {
        res.render('./weekdays/wednesday', { exercise: apiResponse.data })
    })
})
router.get('/thursday', isLoggedIn, (req, res) => {
    //get ids of exercise
    // const exerciseUrl = makeGetRequest(); 
    axios.get(workoutUrl).then((apiResponse) => {
        res.render('./weekdays/thursday', { exercise: apiResponse.data })
    })
})
router.get('/friday', isLoggedIn, (req, res) => {
    //get ids of exercise
    // const exerciseUrl = makeGetRequest(); 
    axios.get(workoutUrl).then((apiResponse) => {
        res.render('./weekdays/friday', { exercise: apiResponse.data })
    })
})
router.get('/saturday', isLoggedIn, (req, res) => {
    //get ids of exercise
    // const exerciseUrl = makeGetRequest(); 
    axios.get(workoutUrl).then((apiResponse) => {

        res.render('./weekdays/saturday', { exercise: apiResponse.data })
    })
})
router.get('/sunday', isLoggedIn, (req, res) => {
    //get ids of exercise
    // const exerciseUrl = makeGetRequest(); 
    axios.get(workoutUrl).then((apiResponse) => {
        res.render('./weekdays/sunday', { exercise: apiResponse.data })
    })
})


// Individually chosen workouts
router.get('/workout/:id', isLoggedIn, (req, res) => {
    res.render('workout')
})

// Profile Page
router.get('/profile/:id', isLoggedIn, (req, res) => {
        res.render('profile' , {user: req.user})
    })


// Journal Entries
router.get('/journal', isLoggedIn, (req, res) => {
    db.user_journal.findAll().then(function(item) {
        console.log(item)
        res.render('journal', {user: item})
    })
})

router.post('/journal', (req, res) => {
    console.log(req.body, "******")
    db.user_journal.create({
            content: req.body.content,
            userId: req.user.id
    }).then(function (createdContent) {
        console.log(createdContent)
        console.log(createdContent.dataValues)
    })
    res.redirect('/journal')
})


module.exports = router; 