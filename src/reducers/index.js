import { combineReducers } from 'redux'
import layoutReducer from './layoutReducer.js'
import coursesReducer from './coursesReducer.js'
import courseReducer from './courseReducer.js'

export default combineReducers({
  layout: layoutReducer,
  courses: coursesReducer,
  course: courseReducer
})

