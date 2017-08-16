import request from 'superagent'

export function receiveHeroes (heroes) {
  return {
    type: 'RECEIVE_HEROES',
    heroes
  }
}

export function getHeroesRequest () {
  return (dispatch) => {
    request
    .get('api/heroes')
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      dispatch(receiveHeroes(res.body))
    })
}
}
