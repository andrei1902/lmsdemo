import { cloneDeep } from 'lodash';

const defaultState = {
  locale: 'en-en',
  texts: {

  }
};

const layoutReducer = (state = cloneDeep(defaultState), { type, payload }) => {
  switch (type) {
    default: {
      return { ...state };
    }
  }
};

export default layoutReducer;
