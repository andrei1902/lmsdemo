import React from 'react'
import useCourses from '../../hooks/useCrourses'
import useLayout from '../../hooks/useLayout'
import { CourseListItem } from '../reusable/CourseListItem'
import { ReloadButton } from '../reusable/ReloadButton'
import { SpinnerText } from '../reusable/SpinnerText'

export const Courses = (): JSX.Element => {
  const [courseState, fetchCourses] = useCourses()
  const [layout] = useLayout()

  const onReload = (event: React.MouseEvent<HTMLElement>) => {
    fetchCourses()
  }

  const renderReloadbutton = () => {
    if (layout.error) {
      return <ReloadButton id="ReloadButton" handleReload={onReload}/>
    }
    return null
  }

  const renderCourses = () => {
    return courseState.courses.map((c, i) => {
      return <CourseListItem key={`CoursesItem${i}`} course={c} locale={layout.locale} />
    })
  }

  return (
    <div>
      <SpinnerText />
      {renderReloadbutton()}
      {renderCourses()}
    </div>
  )
}
