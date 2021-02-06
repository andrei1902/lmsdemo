import React from 'react'
import { Link } from 'react-router-dom'
import Course from '../../models/Course'

interface CourseListItemProps {
  course: Course
}

export const CourseListItem = (props: CourseListItemProps): JSX.Element => {
  return (
    <div>
      <h3>{props.course.name}</h3>
      <p>{props.course.createdAt}</p>
      <img src={props.course.image} alt={props.course.name} />
      <p>{props.course.description}</p>
      <Link to={`/course/${props.course.id}`}>
        <button>
          See more
        </button>
      </Link>
    </div>
  )
}
