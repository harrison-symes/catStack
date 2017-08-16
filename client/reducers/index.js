import {combineReducers} from 'redux'

import heroes from './heroes'
import cartoons from './cartoons'

export default combineReducers({
  heroes,
  cartoons
})
