import Course from '../models/Course'
export const FETCH_COURSES_FULFILLED = 'FETCH_COURSES_FULFILLED'
export const FETCH_COURSES_REJECTED = 'FETCH_COURSES_FULFILLED'
export const FETCH_COURSE_FULFILLED = 'FETCH_COURSES_FULFILLED'
export const FETCH_COURSE_REJECTED = 'FETCH_COURSES_FULFILLED'
export const RESET_COURSES = 'RESET_COURSES'

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

export interface ResetCoursesAction {
  type: typeof RESET_COURSES
}

export type CoursesActions = FetchCoursesFulfilledAction | FetchCoursesRejectedAction | FetchCourseFulfilledAction | FetchCourseRejectedAction | ResetCoursesAction
