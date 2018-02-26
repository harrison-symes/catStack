const db = require('./connection')

function getCharacteristics (testDb) {
  return (testDb || db)('characteristics')
}

function insertCharacteristic (characteristic, testDb) {
  return (testDb || db)('characteristics')
    .insert(characteristic)
    .then(characteristic_id => {
      return db('characteristics')
        .where('characteristic_id', characteristic_id[0]).first()
    })
}

module.exports = {
  getCharacteristics,
  insertCharacteristic
}
