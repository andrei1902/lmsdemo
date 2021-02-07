import React from 'react'
import useEnrollments from '../../hooks/useEnrollments'
import useLayout from '../../hooks/useLayout'
import { CourseEnrollmentListItem } from '../reusable/CourseEnrollmentListItem'
import { ReloadButton } from '../reusable/ReloadButton'
import { SpinnerText } from '../reusable/SpinnerText'

export const CourseEnrollments = (): JSX.Element => {
  const [enrollmentsState, fetchEnrollments] = useEnrollments()
  const [layout] = useLayout()

  const onReload = (event: React.MouseEvent<HTMLElement>) => {
    fetchEnrollments()
  }

  const renderReloadbutton = () => {
    if (layout.error) {
      return <ReloadButton handleReload={onReload} id="ReloadButton"/>
    }
    return null
  }

  const renderCourseEnrollments = () => {
    return enrollmentsState.enrollments.map((e) => {
      return <CourseEnrollmentListItem enrollment={e} />
    })
  }

  return (
    <div>
      <SpinnerText />
      {renderReloadbutton()}
      {renderCourseEnrollments()}
    </div>
  )
}
