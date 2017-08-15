import request from 'superagent'

export const receiveCharacteristics = (characteristics) => {
  return {
    type: 'RECEIVE_CHARACTERISTICS',
    characteristics
  }
}

export const getCharacteristicsRequest = () => {
  return (dispatch) => {
    request
      .get('/api/characteristics')
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

export const addCharacteristicAction = (characteristic) => {
  return {
    type: 'ADD_CHARACTERISTIC',
    characteristic
  }
}

export const postCharacteristicRequest = (characteristic) => {
  return (dispatch) => {
    request
      .post('/api/characteristics')
      .send(characteristic)
      .end((err, res) => {
        if (err) {
          console.log(err)
          return
        }
        dispatch(addCharacteristicAction(res.body))
      })
  }
}
