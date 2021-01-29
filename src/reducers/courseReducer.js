import { cloneDeep } from 'lodash';

const defaultState = {
  fetched: null,
  course: {}
};

const courseReducer = (state = cloneDeep(defaultState), { type, payload }) => {
  switch (type) {
    default: {
      return { ...state };
    }
  }
};

export default courseReducer;
