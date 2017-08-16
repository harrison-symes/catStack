import request from 'superagent'

export function receiveCartoons (cartoons) {
  return {
    type: 'RECEIVE_CARTOONS',
    cartoons
  }
}

export function getCartoonsRequest () {
  return (dispatch) => {
    request
    .get('/api/cartoons')
    .end((err, res) => {
      console.log({err, res});
      if (err) {
        console.log(err)
        return
      }
      dispatch(receiveCharacteristics(res.body))
    })
}
}
