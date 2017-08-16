function heroes (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_HEROES':
    return [..action.heroes]
    default:
    return state
  }
}

export default heroes
