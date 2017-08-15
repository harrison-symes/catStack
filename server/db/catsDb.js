const getCats = (db) => {
  return db('cats')
    .join('characteristics', 'cats.characteristic_id', 'characteristics.characteristic_id')
}

const insertCat = (cat, db) => {
  return db('cats').insert(cat)
    .then(cat_id => {
      return db('cats')
        .where('id', cat_id[0])
        .join('characteristics', 'cats.characteristic_id', 'characteristics.characteristic_id')
        .first()
    })

}

module.exports = {
  getCats,
  insertCat
}
