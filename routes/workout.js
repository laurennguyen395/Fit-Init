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
const e = require('express');
const workoutUrl = 'https://wger.de/api/v2/exercise/?limit=387'

router.use(methodOverride('_method'))
router.use(bodyParser.urlencoded({ extended: false }))

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

// Profile Page
router.get('/profile', isLoggedIn, (req, res) => {
    db.user.findOne().then(function (user) {
        res.render('profile', { user: req.user })
    })
})

// Home Workouts Page
router.get('/workout', isLoggedIn, (req, res) => {
    db.workout.findAll().then(workout => {
        res.render('workout', { workout: workout })
    })

    // Journal Entries
    router.get('/journal', isLoggedIn, (req, res) => {
        db.user_journal.findAll().then(function (item) {
            console.log(item)
            res.render('journal', { user: item })
        })
    })

    router.get('/myjournal', isLoggedIn, (req, res) => {
        db.user_journal.findAll().then(allEntries => {
            res.render('entries', { entries: allEntries })
        })
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
router.get('/workout/monday', isLoggedIn, (req, res) => {
    //get ids of exercise
    // const exerciseUrl = makeGetRequest(); 
    axios.get(workoutUrl).then((apiResponse) => {
        res.render('./weekdays/monday', { exercise: apiResponse.data })
    })
})
router.get('/workout/tuesday', isLoggedIn, (req, res) => {
    //get ids of exercise
    // const exerciseUrl = makeGetRequest(); 
    axios.get(workoutUrl).then((apiResponse) => {
        res.render('./weekdays/tuesday', { exercise: apiResponse.data })
    })
})
router.get('/workout/wednesday', isLoggedIn, (req, res) => {
    //get ids of exercise
    // const exerciseUrl = makeGetRequest(); 
    axios.get(workoutUrl).then((apiResponse) => {
        res.render('./weekdays/wednesday', { exercise: apiResponse.data })
    })
})
router.get('/workout/thursday', isLoggedIn, (req, res) => {
    //get ids of exercise
    // const exerciseUrl = makeGetRequest(); 
    axios.get(workoutUrl).then((apiResponse) => {
        res.render('./weekdays/thursday', { exercise: apiResponse.data })
    })
})
router.get('/workout/friday', isLoggedIn, (req, res) => {
    //get ids of exercise
    // const exerciseUrl = makeGetRequest(); 
    axios.get(workoutUrl).then((apiResponse) => {
        res.render('./weekdays/friday', { exercise: apiResponse.data })
    })
})
router.get('/workout/saturday', isLoggedIn, (req, res) => {
    //get ids of exercise
    // const exerciseUrl = makeGetRequest(); 
    axios.get(workoutUrl).then((apiResponse) => {

        res.render('./weekdays/saturday', { exercise: apiResponse.data })
    })
})
router.get('/workout/sunday', isLoggedIn, (req, res) => {
    //get ids of exercise
    // const exerciseUrl = makeGetRequest(); 
    axios.get(workoutUrl).then((apiResponse) => {
        res.render('./weekdays/sunday', { exercise: apiResponse.data })
    })
})


router.get('/update', isLoggedIn, (req, res) => {
    res.render('update', {user: res.locals.currentUser})
})

router.put('/update', isLoggedIn, (req, res) => {
    // console.log(req.user.dataValues)
    db.user.update({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        height: req.body.height,
        weight: req.body.weight,
        age: req.body.age
    }, {
        where: {
            id: req.user.id
        }
    })
    .then(function (results) {
        console.log(results)
        res.redirect('/profile')
    }).catch(function(err){})
})

// Post new journal entry
router.post('/journal', isLoggedIn, (req, res) => {
    console.log(req.body, "******")
    db.user_journal.create({
        content: req.body.content,
        userId: req.user.id
    }).then(function (createdContent) {
        console.log(createdContent)
        console.log(createdContent.dataValues)
    })
    res.redirect('/myjournal')
})

// Delete journal entry
router.delete('/myjournal/:id', isLoggedIn, (req, res) => {
    db.user_journal.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (deletedEntry) {
        console.log('deleted')
        res.redirect('/myjournal')
    })
})

module.exports = router; 