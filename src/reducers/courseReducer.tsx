import { Reducer } from 'redux'
import Course from '../models/Course'
import { cloneDeep } from 'lodash';

import { CoursesActions } from '../actionTypes/courses'

interface CourseState {
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

const courseReducer: Reducer<CourseState, CoursesActions> = (state = cloneDeep(defaultState), action: CoursesActions) => {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
};

export default courseReducer;
