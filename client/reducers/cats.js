function cats (state = [], action) {
  let newState = [...state]
  switch (action.type) {
    case 'RECEIVE_CATS':
      return [...action.cats]
    case 'ADD_CAT':
      return [...newState, action.cat]
    case 'DELETE_CAT':
      return [...newState].filter(cat => cat != action.cat)
    case 'EDIT_CAT':
      let idx = newState.indexOf(newState.find(cat => cat == action.oldCat))
      newState[idx] = {...action.newCat}
      return newState
    default:
      return state
  }
}

export default cats
