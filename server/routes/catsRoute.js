var express = require('express')
var router = express.Router()

var catsDb = require('../db/catsDb')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  catsDb.getCats(db)
    .then(cats => {
      res.json(cats)
    })
})

router.post('/', (req, res) => {
  let db = req.app.get('db')
  catsDb.insertCat(req.body, db)
    .then(cat => res.json(cat))
    .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))
})

module.exports = router
