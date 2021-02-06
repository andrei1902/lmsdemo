import { Reducer } from 'redux'
import Course from '../models/Course'
import { CoursesActions } from '../actionTypes/courses'
import { cloneDeep } from 'lodash';

interface CoursesState {
  fetched: Boolean|null,
  pageSize: Number,
  pageNumber: Number,
  courses: Array<Course>
}

const defaultState: CoursesState = {
  fetched: null,
  pageSize: 10,
  pageNumber: 0,
  courses: []
};

export const coursesReducer: Reducer<CoursesState, CoursesActions> = (state = cloneDeep(defaultState), action: CoursesActions) => {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
};

export default coursesReducer;
