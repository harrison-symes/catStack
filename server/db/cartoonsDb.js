
function getCartoons(db) {
  return db ('cartoons')
}

module.exports = {
  getCartoons: getCartoons
}
