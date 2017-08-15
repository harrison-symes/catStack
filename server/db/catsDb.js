const getCats = (db) => {
  return db('cats')
    .join('characteristics', 'cats.characteristic_id', 'characteristics.characteristic_id')
}

const insertCat = (cat, db) => {
  return db('cats')
    .insert(cat)
}

module.exports = {
  getCats,
  insertCat
}
