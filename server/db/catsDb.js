const getCats = (db) => {
  return db('cats')
    .join('characteristics', 'cats.characteristic_id', 'characteristics.characteristic_id')
}

module.exports = {
  getCats
}
