function cats (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_CATS':
      return [...action.cats]
    case 'ADD_CAT':
      return [...state, action.cat]
    case 'DELETE_CAT':
      return [...state].filter(cat => cat != action.cat)
    default:
      return state
  }
}

export default cats
