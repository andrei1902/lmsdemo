import { Reducer, Action } from 'redux'
import { cloneDeep } from 'lodash';

interface LayoutState {
  locale: String,
  texts: {

  }
}

const defaultState: LayoutState = {
  locale: 'en-en',
  texts: {

  }
};

export const layoutReducer: Reducer<LayoutState, Action> = (state = cloneDeep(defaultState), action) => {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
};

export default layoutReducer

