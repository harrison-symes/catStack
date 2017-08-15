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

module.exports = router
