function cats (state = [], action) {
  let newState = [...state]
  switch (action.type) {
    case 'RECEIVE_CATS':
      return [...action.cats]
    case 'ADD_CAT':
      return [...newState, action.cat]
    case 'DELETE_CAT':
      return [...newState].filter(cat => cat != action.cat)
    default:
      return state
  }
}

export default cats
