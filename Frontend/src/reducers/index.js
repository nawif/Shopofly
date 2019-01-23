import { combineReducers } from 'redux'
import KeyboardReducer from './KeyboardReducer'

export default combineReducers({
  keyboardState: KeyboardReducer
})
