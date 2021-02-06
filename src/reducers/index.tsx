import { combineReducers } from 'redux'
import { layoutReducer, LayoutState } from './layoutReducer'
import { coursesReducer, CoursesState } from './coursesReducer'
import { courseReducer, CourseState } from './courseReducer'

export const rootReducer = combineReducers({
  layout: layoutReducer,
  courses: coursesReducer,
  course: courseReducer
})

export interface RootState {
  layout: LayoutState,
  courses: CoursesState,
  course: CourseState
}
