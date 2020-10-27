const expect = require('chai').expect;
const db = require('../models');


db.workout.create({
    date: '11/2/2020',
    name: 'Quads+Glutes+Hamstrings'
}).then(function (createdWorkout) {
    console.log(createdWorkout.dataValues)
})
