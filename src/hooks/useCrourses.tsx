import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCourses } from '../actions/coursesActions'
import { RootState } from '../reducers/index'
import { CoursesState } from '../reducers/coursesReducer'

const useCourses = (): [CoursesState, Function] => {
  const pickCourses = (state: RootState) => state.courses
  const courses = useSelector(pickCourses)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchCourses())
  }, [dispatch])

  return [courses, fetchCourses]
}

export default useCourses
