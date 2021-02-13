import { fetchCourses as getCourses } from '../API/coursesAPI'
import Course from '../models/Course'
import { CoursesActions, FETCH_COURSES_FULFILLED, FETCH_COURSES_REJECTED, RESET_COURSES } from '../actionTypes/courses'
import { startSpinner, stopSpinner, fireError } from './layoutActions' 

/**
 * Action creator load a list of courses.
 * @param {Number=} pageSize size of the page
 * @param {Number=} pageNumber page number
 * @param {String=} serachTerm filter term
 * @returns {Function}
 */
export const fetchCourses = (
  // pageSize?: Number = 10,
  // pageNumber?: Number = 0,
  // serachTerm?: String = ''
) => {
  return async (dispatch: Function) => {
    try {
      dispatch(startSpinner('courses'))
      const results = await getCourses()
      dispatch(fetchCoursesFulfilled(results))
      dispatch(stopSpinner('courses'))
    } catch(err) {
      dispatch(fetchCoursesRejected())
      dispatch(fireError(err))
    }
  }
}

/**
 * Action creator to mark course loading fulfilled
 * @param {SPINNER_NAME} spinnerName the name of a spinner
 * @returns {LayoutActions}
 */
export const fetchCoursesFulfilled = (courses: Array<Course>): CoursesActions => {
  return {
    type: FETCH_COURSES_FULFILLED,
    payload: courses
  }
}

/**
 * Action creator to course loading failed
 * @param {SPINNER_NAME} spinnerName the name of a spinner
 * @returns {LayoutActions}
 */
export const fetchCoursesRejected = (): CoursesActions => {
  return {
    type: FETCH_COURSES_REJECTED
  }
}

/**
 * Action creator to reset the courses state
 * @returns {CoursesActions}
 */
export const resetCourses = (): CoursesActions => {
  return {
    type: RESET_COURSES
  }
}
