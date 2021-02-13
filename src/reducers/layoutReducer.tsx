import { Reducer } from 'redux';
import {
  START_SPINNER,
  STOP_SPINNER,
  FIRE_ERROR,
  LayoutActions,
  SpinnerName
} from '../actionTypes/layout';
import { cloneDeep, remove } from 'lodash';

export interface LayoutState {
  locale: string,
  texts: {
    templates: {
      dataTypesLoading: String
    },
    courses: String,
    enrollments: String
  },
  spinners: Array<SpinnerName>
  error: Error|null
}

const defaultState: LayoutState = {
  locale: 'en',
  texts: {
    templates: {
      dataTypesLoading: '__dateTypes__ are being loaded'
    },
    courses: 'Courses',
    enrollments: 'Enrollments'
  },
  spinners: [],
  error: null
};

export const layoutReducer: Reducer<LayoutState, LayoutActions> = (state = cloneDeep(defaultState), action: LayoutActions): LayoutState => {
  switch (action.type) {
    case START_SPINNER: {
      const newState = cloneDeep(state);
      newState.spinners = [...newState.spinners, action.payload];
      return newState;
    }
    case STOP_SPINNER: {
      const newState = cloneDeep(state);
      remove(newState.spinners, (sp: String) => sp === action.payload);
      return newState;
    }
    case FIRE_ERROR: {
      const newState = cloneDeep(state);
      newState.error = action.payload;
      return newState;
    }
    default: return cloneDeep(state);
  }
};

export default layoutReducer

