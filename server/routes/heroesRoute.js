var express = require('express')
var router = express.Router()

var heroesDb = require('../db/heroesDb')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  heroesDb.getHeroes(db)
  .then(heroes => res.json(heroes))
  .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))
})

module.exports = router
