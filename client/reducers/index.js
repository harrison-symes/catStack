import {combineReducers} from 'redux'

import cats from './cats'
import characteristics from './characteristics'

export default combineReducers({
  cats,
  characteristics
})
