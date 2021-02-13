import { fetchEnrollments as getEnrollments } from '../API/enrollmentsAPI'
import { fetchUsers as getUsers } from '../API/usersAPI'
import { fetchCourses as getCourses } from '../API/coursesAPI'
import Enrollment from '../models/Enrollment'
import User from '../models/User'
import Course from '../models/Course'
import { EnrollmentsActions, ResetEnrollmentsAction, FETCH_ENROLLMENTS_FULFILLED, FETCH_ENROLLMENTS_REJECTED, RESET_ENROLLMENTS } from '../actionTypes/enrollments'
import { startSpinner, stopSpinner, fireError } from './layoutActions' 

/**
 * Action creator load a list of enrollments.
 * @param {Number=} pageSize size of the page
 * @param {Number=} pageNumber page number
 * @param {String=} serachTerm filter term
 * @returns {Function}
 */
export const fetchEnrollments = (
  // pageSize?: Number = 10,
  // pageNumber?: Number = 0,
  // serachTerm?: String = ''
) => {
  return async (dispatch: Function) => {
    try {
      dispatch(startSpinner('enrollments'))
      const enrollments = await getEnrollments()
      const users = await getUsers()
      const courses = await getCourses()
      dispatch(fetchEnrollmentsFulfilled(enrollments, users, courses))
      dispatch(stopSpinner('enrollments'))
    } catch(err) {
      dispatch(fetchCoursesRejected())
      dispatch(fireError(err))
    }
  }
}

/**
 * Action creator to mark enrollment loading fulfilled
 * @param {SPINNER_NAME} spinnerName the name of a spinner
 * @returns {EnrollmentsActions}
 */
export const fetchEnrollmentsFulfilled = (
  enrollments: Array<Enrollment>,
  users: Array<User>,
  courses: Array<Course>
): EnrollmentsActions => {
  return {
    type: FETCH_ENROLLMENTS_FULFILLED,
    payload: { enrollments, users, courses } 
  }
}

/**
 * Action creator to course loading failed
 * @param {SPINNER_NAME} spinnerName the name of a spinner
 * @returns {EnrollmentsActions}
 */
export const fetchCoursesRejected = (): EnrollmentsActions => {
  return {
    type: FETCH_ENROLLMENTS_REJECTED
  }
}

/**
 * Action creator to reset enrollments state
 * @param {SPINNER_NAME} spinnerName the name of a spinner
 * @returns {ResetEnrollmentsAction}
 */
export const resetEnrollments = (): ResetEnrollmentsAction => {
  return {
    type: RESET_ENROLLMENTS
  }
}
