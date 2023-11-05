import axios from 'axios'

// base url for mock api
// This should be in the .env file but for demo purposes I am using it here.

const baseURL = 'https://1780bf9a-10a6-4235-8605-39539ff6a76b.mock.pstmn.io/'

/**
 * Fetches media from a given URL.
 *
 * @param {string} url - The URL of the media to fetch.
 * @return {Promise} A Promise that resolves to the response containing the fetched media.
 */
export const fetchMedia = async (url) => {
  const response = await axios.get(`${baseURL}${url}`)
  return response
}
