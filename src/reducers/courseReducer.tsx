import { Reducer } from 'redux'
import Course from '../models/Course'
import { cloneDeep } from 'lodash';

import { CoursesActions } from '../actionTypes/courses'

export interface CourseState {
  fetched: Boolean|null,
  course: Course
}

const defaultState: CourseState = {
  fetched: null,
  course: {
    id: '',
    createdAt: '',
    name: '',
    image: '',
    description: ''
  }
};

export const courseReducer: Reducer<CourseState, CoursesActions> = (state = cloneDeep(defaultState), action: CoursesActions): CourseState => {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
};
