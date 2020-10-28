const db = require('../models');

db.user_journal.create({
    content: 'Hello please work',
    userId: req.body.userId
}).then(function(contentCreated) {
    console.log(contentCreated.get())
})

db.user.findOne({
    where: { id: req.user },
    include: [db.user_journal]
  }).then(function(user) {
    // by using eager loading, the article model should have a comments key
    console.log(user.user_journal)
  })