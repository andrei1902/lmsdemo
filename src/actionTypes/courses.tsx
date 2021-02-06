import Course from '../models/Course'
const FETCH_COURSES_FULFILLED = 'FETCH_COURSES_FULFILLED'
const FETCH_COURSES_REJECTED = 'FETCH_COURSES_FULFILLED'
const FETCH_COURSE_FULFILLED = 'FETCH_COURSES_FULFILLED'
const FETCH_COURSE_REJECTED = 'FETCH_COURSES_FULFILLED'

interface FetchCoursesFulfilledAction {
  type: typeof FETCH_COURSES_FULFILLED,
  payload: Array<Course>
}

interface FetchCoursesRejectedAction {
  type: typeof FETCH_COURSES_REJECTED
}

interface FetchCourseFulfilledAction {
  type: typeof FETCH_COURSE_FULFILLED,
  payload: Array<Course>
}

interface FetchCourseRejectedAction {
  type: typeof FETCH_COURSE_REJECTED
}

export type CoursesActions = FetchCoursesFulfilledAction | FetchCoursesRejectedAction | FetchCourseFulfilledAction | FetchCourseRejectedAction
