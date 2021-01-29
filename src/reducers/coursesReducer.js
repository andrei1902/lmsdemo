import { cloneDeep } from 'lodash';

const defaultState = {
  fetched: null,
  pageSize: 10,
  pageNumber: 0,
  courses: []
};

const coursesReducer = (state = cloneDeep(defaultState), { type, payload }) => {
  switch (type) {
    default: {
      return { ...state };
    }
  }
};

export default coursesReducer;
