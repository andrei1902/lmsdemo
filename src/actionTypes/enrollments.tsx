import Enrollment from '../models/Enrollment'
import User from '../models/User'
import Course from '../models/Course'
export const FETCH_ENROLLMENTS_FULFILLED = 'FETCH_ENROLLMENTS_FULFILLED'
export const FETCH_ENROLLMENTS_REJECTED = 'FETCH_ENROLLMENTS_FULFILLED'

export interface FetchEnrollmentsFulfilledAction {
  type: typeof FETCH_ENROLLMENTS_FULFILLED,
  payload: {
    enrollments: Array<Enrollment>,
    users: Array<User>,
    courses: Array<Course>,
  }
  
}

export interface FetchEnrollmentsRejectedAction {
  type: typeof FETCH_ENROLLMENTS_REJECTED
}

export type EnrollmentsActions = FetchEnrollmentsFulfilledAction | FetchEnrollmentsRejectedAction
