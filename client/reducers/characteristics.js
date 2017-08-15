
export default function charactersticsReducer (state=[], action) {
  switch(action.type) {
    case 'RECEIVE_CHARACTERISTICS':
      return [...action.characteristics]
    default:
      return state
  }
}
