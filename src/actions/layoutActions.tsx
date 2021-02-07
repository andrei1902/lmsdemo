import {
  LayoutActions,
  START_SPINNER,
  STOP_SPINNER,
  FIRE_ERROR,
  SpinnerName
} from '../actionTypes/layout'

/**
 * Action creator to start a spinner
 * @param {SPINNER_NAME} spinnerName the name of a spinner
 * @returns {LayoutActions}
 */
export const startSpinner = (spinnerName: SpinnerName): LayoutActions => {
  return {
    type: START_SPINNER,
    payload: spinnerName
  }
}

/**
 * Action creator to stop a spinner
 * @param {SPINNER_NAME} spinnerName the name of a spinner
 * @returns {LayoutActions}
 */
export const stopSpinner = (spinnerName: SpinnerName): LayoutActions => {
  return {
    type: STOP_SPINNER,
    payload: spinnerName
  }
}

/**
 * Action creator to fire an error
 * @param {Error} error the error to fire
 * @returns {LayoutActions}
 */
export const fireError = (error: Error): LayoutActions => {
  return {
    type: FIRE_ERROR,
    payload: error
  }
}
