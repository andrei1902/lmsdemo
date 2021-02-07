import axios from 'axios'
import User from '../models/User'
import { USERS_API_URL } from '../settings'

/**
 * Fetches a list of users from the API
 * @param {Number=} pageSize size of the page
 * @param {Number=} pageNumber page number
 * @param {String=} serachTerm filter term
 * @returns {Array<User>}
 */
export const fetchUsers = async (pageSize?: Number, pageNumber?: Number, serachTerm?: String): Promise<Array<User>> => {
  const response = await axios.get(USERS_API_URL)
  return response.data
}
