import { Reducer } from 'redux';
import DisplayedEnrollment from '../models/DisplayedEnrollment';
import Enrollment from '../models/Enrollment';
import User from '../models/User';
import Course from '../models/Course';
import { FetchEnrollmentsFulfilledAction, FETCH_ENROLLMENTS_FULFILLED, FETCH_ENROLLMENTS_REJECTED } from '../actionTypes/enrollments';
import { cloneDeep } from 'lodash';

export interface EnrollmentsState {
  fetched: Boolean|null,
  pageSize: Number,
  pageNumber: Number,
  enrollments: Array<DisplayedEnrollment>
}

export const defaultState: EnrollmentsState = {
  fetched: null,
  pageSize: 10,
  pageNumber: 0,
  enrollments: []
};

export const enrollmentsReducer: Reducer<EnrollmentsState, FetchEnrollmentsFulfilledAction> = (
  state = cloneDeep(defaultState),
  action: FetchEnrollmentsFulfilledAction
): EnrollmentsState => {
  switch (action.type) {
    case FETCH_ENROLLMENTS_FULFILLED: {
      const newState = cloneDeep(state);
      newState.enrollments = action.payload.enrollments.map((e) : DisplayedEnrollment => {
        const foundUser = action.payload.users.find((u) => u.id + '' === e.user_id + '') || { avatar: '', name: '' }
        const foundCourse = action.payload.courses.find((c) => c.id + '' === e.course_id + '') || { name: '' }
        return _mapEnrollment(e, foundUser, foundCourse)
      });
      newState.fetched = true;
      return newState
    }
    case FETCH_ENROLLMENTS_REJECTED: {
      const newState = cloneDeep(state);
      newState.fetched = false;
      return newState;
    }
    default: {
      return { ...state };
    }
  }
};

function _mapEnrollment(
  enrollment: Enrollment,
  user: User| { avatar: string, name: string },
  course: Course | { name: string }
): DisplayedEnrollment {
  return Object.assign(enrollment, { user, course })
}
