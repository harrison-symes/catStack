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

router.delete('/:id', (req, res) => {
  let db = req.app.get('db')
  catsDb.deleteCat(req.params.id, db)
    .then(() => res.sendStatus(202))
    .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))
})

router.put('/:id', (req, res) => {
  console.log(req.body);
  let db = req.app.get('db')
  delete req.body.description

  catsDb.editCat(req.params.id, req.body, db)
    .then((editedCat) => res.json(editedCat))
    .catch(err => console.log(err))
})

module.exports = router
