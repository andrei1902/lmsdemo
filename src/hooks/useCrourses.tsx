import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCourses, resetCourses } from '../actions/coursesActions'
import { RootState } from '../reducers/index'
import { CoursesState } from '../reducers/coursesReducer'

const useCourses = (): [CoursesState, Function] => {
  const pickCourses = (state: RootState) => state.courses
  const courses = useSelector(pickCourses)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCourses())
    return () => {
      dispatch(resetCourses())
    }
  }, [dispatch])

  return [courses, fetchCourses]
}

export default useCourses
