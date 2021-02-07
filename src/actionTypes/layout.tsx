export const START_SPINNER = 'START_SPINNER'
export const STOP_SPINNER = 'STOP_SPINNER'
export const FIRE_ERROR = 'FIRE_ERROR'

interface StartSpinner {
  type: typeof START_SPINNER,
  payload: SpinnerName
}

interface StopSpinner {
  type: typeof STOP_SPINNER,
  payload: SpinnerName
}

interface FireError {
  type: typeof FIRE_ERROR,
  payload: Error
}

export type SpinnerName = 'courses' | 'layout' | 'enrollments'

export type LayoutActions = StartSpinner | StopSpinner | FireError
