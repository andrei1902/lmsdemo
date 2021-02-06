import axios from 'axios'
import Course from '../models/Course'
import { COURSES_API_URL } from '../settings'

/**
 * Fetches a list of courses from the API
 * @param {Number=} pageSize size of the page
 * @param {Number=} pageNumber page number
 * @param {String=} serachTerm filter term
 * @returns {Array<Course>}
 */
export const fetchCourses = async (
  // pageSize?: Number = 10,
  // pageNumber?: Number = 0,
  // serachTerm?: String = ''
): Promise<Array<Course>> => {
  const response = await axios.get(COURSES_API_URL)
  return response.data
}
