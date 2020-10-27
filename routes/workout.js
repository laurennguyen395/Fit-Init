const layouts = require('express-ejs-layouts');
const isLoggedIn = require('../middleware/isLoggedIn');
const methodOverride = require('method-override')
const axios = require('axios')
const apiKey = '34e71e65fea4bd5480247027ff3d653d33f1961f'
const express = require('express')
const passport = require('../config/ppConfig')
const db = require('../models')
const router = express.Router()
const workoutUrl = 'https://wger.de/api/v2/exercise/?limit=387'


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
    makeGetRequest(workoutUrl);
    
    
    // Home Workouts Page
    router.get('/workout', isLoggedIn, (req, res) => {
        db.workout.findAll().then(workout => {
            console.log(workout)
            res.render('workout', {workout: workout})
        }) 
    })

//viewing an individual exercise
router.get('/exercise', isLoggedIn, (req, res) => {
    //get ids of exercise
    // const exerciseUrl = makeGetRequest(); 
    axios.get(workoutUrl).then((apiResponse) => {
        console.log(apiResponse.data)
        res.render('exercise', { exercise: apiResponse.data })
    })
})

router.get('/detail', isLoggedIn, (req, res) => {
    //exercise details
    axios.get(workoutUrl).then((apiResponse) => {
        console.log(apiResponse.data)
        res.render('detail', { exercise: apiResponse.data })
    })
})

// Daily Workouts
router.get('/monday', isLoggedIn, (req, res) => {
    //get ids of exercise
    // const exerciseUrl = makeGetRequest(); 
    axios.get(workoutUrl).then((apiResponse) => {
        console.log(apiResponse.data)
        res.render('./weekdays/monday', { exercise: apiResponse.data })
    })
})
router.get('/tuesday', isLoggedIn, (req, res) => {
    //get ids of exercise
    // const exerciseUrl = makeGetRequest(); 
    axios.get(workoutUrl).then((apiResponse) => {
        console.log(apiResponse.data)
        res.render('./weekdays/tuesday', { exercise: apiResponse.data })
    })
})
router.get('/wednesday', isLoggedIn, (req, res) => {
    //get ids of exercise
    // const exerciseUrl = makeGetRequest(); 
    axios.get(workoutUrl).then((apiResponse) => {
        console.log(apiResponse.data)
        res.render('./weekdays/wednesday', { exercise: apiResponse.data })
    })
})
router.get('/thursday', isLoggedIn, (req, res) => {
    //get ids of exercise
    // const exerciseUrl = makeGetRequest(); 
    axios.get(workoutUrl).then((apiResponse) => {
        console.log(apiResponse.data)
        res.render('./weekdays/thursday', { exercise: apiResponse.data })
    })
})
router.get('/friday', isLoggedIn, (req, res) => {
    //get ids of exercise
    // const exerciseUrl = makeGetRequest(); 
    axios.get(workoutUrl).then((apiResponse) => {
        console.log(apiResponse.data)
        res.render('./weekdays/friday', { exercise: apiResponse.data })
    })
})
router.get('/saturday', isLoggedIn, (req, res) => {
    //get ids of exercise
    // const exerciseUrl = makeGetRequest(); 
    axios.get(workoutUrl).then((apiResponse) => {
        console.log(apiResponse.data)
        res.render('./weekdays/saturday', { exercise: apiResponse.data })
    })
})
router.get('/sunday', isLoggedIn, (req, res) => {
    //get ids of exercise
    // const exerciseUrl = makeGetRequest(); 
    axios.get(workoutUrl).then((apiResponse) => {
        console.log(apiResponse.data)
        res.render('./weekdays/sunday', { exercise: apiResponse.data })
    })
})


// Individually chosen workouts
router.get('/workout/:id', isLoggedIn, (req, res) => {
    res.render('workout')
})

// Profile Page
router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile');
});



router.get('/profile/:id', isLoggedIn, (req, res) => {
    res.render('profile');
});


// Journal Entries
router.get('/journal', isLoggedIn, (req, res) => {
    db.user.findOne().then(function(foundUser){
        where: {
            name: {foundUser.dataValues.name}
        }
    })
    res.render('journal')
})

router.post('/journal', isLoggedIn, (req, res) => {
    res.render('journal')
})

router.delete('/journal', isLoggedIn, (req, res) => {
    res.send('we want to delete something here')
    // maybe: db.user_journal.destroy({
    // where: {
    // userId = '${user}
    //   }
    // })
})

router.get('/db', (req, res) => {
    db.workout.findOrCreate({
        where: {
            date: '11/8/2020',
            name: 'Rest+Recovery'
        }
    }).then(function (createdWorkout) {
        console.log(createdWorkout.dataValues)
    })
    res.send('create')
})



module.exports = router;