import User from './User'
import Course from './Course'

interface DisplayedEnrollment {
  user: User | {
    avatar: string,
    name: string
  };
  course: Course | {
    name: string
  };
  id: number,
  createdAt: string,
  course_id: number,
  user_id: number
}

export default DisplayedEnrollment