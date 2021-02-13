import { Reducer } from 'redux';
import Course from '../models/Course';
import { FETCH_COURSES_FULFILLED, FETCH_COURSES_REJECTED, RESET_COURSES } from '../actionTypes/courses';
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

export const coursesReducer: Reducer<CoursesState, any> = (state = cloneDeep(defaultState), action: any): CoursesState => {
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
    case RESET_COURSES: {
      return cloneDeep(defaultState);
    }
    default: {
      return { ...state };
    }
  }
};
