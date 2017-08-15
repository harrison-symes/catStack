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

export const addCat = (cat) => {
  return {
    type: 'ADD_CAT',
    cat
  }
}

export function postCatRequest (cat) {
  return (dispatch) => {
    request
      .post('/api/cats')
      .send(cat)
      .end((err, res) => {
        if (err) {
          console.log(err.mesage)
          return
        }
        dispatch(addCat(res.body))
      })
  }
}

export const deleteCatAction = (cat) => {
  return {
    type: 'DELETE_CAT',
    cat
  }
}

export const deleteCatRequest = (cat) => {
  return (dispatch) => {
    request
      .delete('/api/cats/' + cat.id)
      .end((err, res) => {
        if (err) {
          console.log(err)
          return
        }
        dispatch(deleteCatAction(cat))
      })
  }
}
