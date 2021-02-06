import { combineReducers } from 'redux'
import { layoutReducer } from './layoutReducer'
import coursesReducer from './coursesReducer'
import courseReducer from './courseReducer'

export default combineReducers({
  layout: layoutReducer,
  courses: coursesReducer,
  course: courseReducer
})

