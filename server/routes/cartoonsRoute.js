var express = require('express')
var router = express.Router()

var cartoonsDb = require('../db/cartoonsDb')


router.get('/', (req, res) => {
  let db = req.app.get('db')
  cartoonsDb.getCartoons(db)
  .then(cartoons => res.json(cartoons))
  .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))
})

module.exports = router
