import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchEnrollments, resetEnrollments } from '../actions/enrollmentsActions'
import { RootState } from '../reducers/index'
import { EnrollmentsState } from '../reducers/enrollmentsReducer'

const useEnrollments = (): [EnrollmentsState, Function] => {
  const enrollments = useSelector((state: RootState) => state.enrollments)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchEnrollments())
      return () => {
        dispatch(resetEnrollments())
      }
  }, [dispatch])

  return [enrollments, fetchEnrollments]
}

export default useEnrollments
