import axios from 'axios'
import Enrollment from '../models/Enrollment'
import { ENROLLMENTS_API_URL } from '../settings'

/**
 * Fetches a list of enrollments from the API
 * @param {Number=} pageSize size of the page
 * @param {Number=} pageNumber page number
 * @param {String=} serachTerm filter term
 * @returns {Array<Enrollment>}
 */
export const fetchEnrollments = async (pageSize?: Number, pageNumber?: Number, serachTerm?: String): Promise<Array<Enrollment>> => {
  const response = await axios.get(ENROLLMENTS_API_URL)
  return response.data
}
