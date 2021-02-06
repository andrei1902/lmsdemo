import { Reducer } from 'redux';
import Course from '../models/Course';
import { CoursesActions, FetchCoursesFulfilledAction, FETCH_COURSES_FULFILLED, FETCH_COURSES_REJECTED } from '../actionTypes/courses';
import { cloneDeep } from 'lodash';


export interface CoursesState {
  fetched: Boolean|null,
  pageSize: Number,
  pageNumber: Number,
  courses: Array<Course>
}

export const defaultState: CoursesState = {
  fetched: null,
  pageSize: 10,
  pageNumber: 0,
  courses: []
};

export const coursesReducer: Reducer<CoursesState, FetchCoursesFulfilledAction> = (state = cloneDeep(defaultState), action: FetchCoursesFulfilledAction): CoursesState => {
  switch (action.type) {
    case FETCH_COURSES_FULFILLED: {
      const newState = cloneDeep(state);
      newState.courses = action.payload;
      newState.fetched = true;
      return newState
    }
    case FETCH_COURSES_REJECTED: {
      const newState = cloneDeep(state);
      newState.fetched = false;
      return newState;
    }
    default: {
      return { ...state };
    }
  }
};
