import React from 'react'
import useCourses from '../../hooks/useCrourses'

export const Courses = (): JSX.Element => {
  const [courses, fetchCourses] = useCourses()

  return <div>Courses page</div>
}
