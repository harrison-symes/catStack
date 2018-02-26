const getCats = (db) => {
  return db('cats')
    .join('characteristics', 'cats.characteristic_id', 'characteristics.characteristic_id')
}

const getCatById = (id, db) => {
  return db('cats')
    .join('characteristics', 'cats.characteristic_id', 'characteristics.characteristic_id')
    .where('cats.id', id)
}

const insertCat = (cat, db) => {
  return db('cats').insert(cat)
    .then(cat_id => getCatById(cat_id[0], db))
}

const deleteCat = (id, db) => {
  return db('cats')
    .where('id', id)
    .del()
}

const editCat = (id, newCat, db) => {
  return db('cats')
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
