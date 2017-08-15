function cats (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_CATS':
      return [...action.cats]
    default:
      return state
  }
}

export default cats
