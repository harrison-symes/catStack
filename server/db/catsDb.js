const db = require('./connection')

const getCats = (testDb) => {
  return (testDb || db)('cats')
    .join('characteristics', 'cats.characteristic_id', 'characteristics.characteristic_id')
}

const getCatById = (id, testDb) => {
  return (testDb || db)('cats')
    .join('characteristics', 'cats.characteristic_id', 'characteristics.characteristic_id')
    .where('cats.id', id)
}

const insertCat = (cat, testDb) => {
  return (testDb || db)('cats').insert(cat)
    .then(cat_id => getCatById(cat_id[0], db))
}

const deleteCat = (id, testDb) => {
  return (testDb || db)('cats')
    .where('id', id)
    .del()
}

const editCat = (id, newCat, testDb) => {
  return (testDb || db)('cats')
    .where('id', id)
    .update(newCat)
    .then(() => getCatById(id, db))
}

module.exports = {
  getCats,
  insertCat,
  deleteCat,
  editCat
}
