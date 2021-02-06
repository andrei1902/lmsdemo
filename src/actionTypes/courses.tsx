import Course from '../models/Course'
export const FETCH_COURSES_FULFILLED = 'FETCH_COURSES_FULFILLED'
export const FETCH_COURSES_REJECTED = 'FETCH_COURSES_FULFILLED'
export const FETCH_COURSE_FULFILLED = 'FETCH_COURSES_FULFILLED'
export const FETCH_COURSE_REJECTED = 'FETCH_COURSES_FULFILLED'

export interface FetchCoursesFulfilledAction {
  type: typeof FETCH_COURSES_FULFILLED,
  payload: Array<Course>
}

export interface FetchCoursesRejectedAction {
  type: typeof FETCH_COURSES_REJECTED
}

export interface FetchCourseFulfilledAction {
  type: typeof FETCH_COURSE_FULFILLED,
  payload: Array<Course>
}

export interface FetchCourseRejectedAction {
  type: typeof FETCH_COURSE_REJECTED
}

export type CoursesActions = FetchCoursesFulfilledAction | FetchCoursesRejectedAction | FetchCourseFulfilledAction | FetchCourseRejectedAction
