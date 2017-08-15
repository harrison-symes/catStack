import request from 'superagent'

export const receiveCats = (cats) => {
  return {
    type: 'RECEIVE_CATS',
    cats
  }
}

export function getCatsRequest () {
  return (dispatch) => {
    request
      .get(`/api/cats`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveCats(res.body))
      })
  }
}
