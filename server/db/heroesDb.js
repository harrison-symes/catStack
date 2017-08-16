function getHeroes(db) {
// const getHeroes = (db) => {
  return db('heroes')
  .join('cartoons', 'heroes.cartoon_id', 'cartoons.cartoon_id')
}


module.exports = {
  getHeroes
}
