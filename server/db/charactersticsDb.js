
function getCharacteristics (db) {
  return db('characteristics')
}

function insertCharacteristic (characteristic, db) {
  return db('characteristics')
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
