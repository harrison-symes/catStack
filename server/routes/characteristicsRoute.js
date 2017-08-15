var router = require('express').Router()
var characteristicsDb = require('../db/charactersticsDb')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  characteristicsDb.getCharacteristics(db)
    .then(characteristics => res.json(characteristics))
    .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))
})

module.exports = router
