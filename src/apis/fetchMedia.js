import axios from 'axios'
export const fetchMedia = async (url) => {
  const response = await axios.get(url)
  return response
}
