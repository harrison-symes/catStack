function cartoons (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_CARTOONS':
    return [...action.cartoons]
    default:
    return state
  }
}

export default cartoons
