const db = require('../models');



router.get('/db', (req, res) => {
    db.workout.findOrCreate({
        where: {
            date: '11/2/2020',
            name: 'Quads+Glutes+Hamstrings'
        }
    }).then(function (createdWorkout) {
        console.log(createdWorkout)
    })
	res.send('created')
})
router.get('/db', (req, res) => {
    db.workout.findOrCreate({
        where: {
            date: '11/3/2020',
            name: 'Chest+Triceps'
        }
    }).then(function (createdWorkout) {
        console.log(createdWorkout)
    })
	res.send('created')
})
router.get('/db', (req, res) => {
    db.workout.findOrCreate({
        where: {
            date: '11/4/2020',
            name: 'Abs'
        }
    }).then(function (createdWorkout) {
        console.log(createdWorkout)
    })
	res.send('created')
})
router.get('/db', (req, res) => {
    db.workout.findOrCreate({
        where: {
            date: '11/5/2020',
            name: 'Back+Biceps'
        }
    }).then(function (createdWorkout) {
        console.log(createdWorkout)
    })
	res.send('created')
})
router.get('/db', (req, res) => {
    db.workout.findOrCreate({
        where: {
            date: '11/6/2020',
            name: 'Legs'
        }
    }).then(function (createdWorkout) {
        console.log(createdWorkout)
    })
	res.send('created')
})
router.get('/db', (req, res) => {
    db.workout.findOrCreate({
        where: {
            date: '11/7/2020',
            name: 'Full Body'
        }
    }).then(function (createdWorkout) {
        console.log(createdWorkout)
    })
	res.send('created')
})
router.get('/db', (req, res) => {
    db.workout.findOrCreate({
        where: {
            date: '11/8/2020',
            name: 'Rest+Recovery'
        }
    }).then(function (createdWorkout) {
        console.log(createdWorkout)
    })
	res.send('created')
})