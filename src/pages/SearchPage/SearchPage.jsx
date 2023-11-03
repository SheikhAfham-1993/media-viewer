import './SearchPage.css'

import { useEffect, useState } from 'react'
import Loader from '../../components/Loader/Loader'
import SearchMedia from '../../components/SearchMedia/SearchMedia'
import Gallery from '../../components/Gallery/Gallery'
import { fetchMedia } from '../../apis/fetchMedia'

/**
 * Main page to that displays all the media. It contains Search box and Gallery to show the media content
 *
 * @return {JSX.Element}
 */
const SearchPage = () => {
  const [media, setMedia] = useState([]) //media object that is visible in the gallery section
  const [isLoading, setIsLoading] = useState(false) // loader state which is displayed when data is being fetched

  /**
   * Fetches media data that user has searched for.
   *
   * @param {string} query - The search query string. Defaults to an empty string.
   * @return {Promise} - A promise that resolves with the fetched media data.
   */
  const fetchMediaData = async (query = '') => {
    let url =
      'https://1780bf9a-10a6-4235-8605-39539ff6a76b.mock.pstmn.io/search'
    if (query) {
      url = `https://1780bf9a-10a6-4235-8605-39539ff6a76b.mock.pstmn.io/search?query=${query}`
    }
    setIsLoading(true)
    let response = await fetchMedia(url)
    setMedia(response.data.media)
    setIsLoading(false)
  }

  //fetch media data on page load
  useEffect(() => {
    fetchMediaData()
  }, [])

  return (
    <div className="container">
      <SearchMedia fetchMedia={fetchMediaData} />
      {isLoading ? <Loader /> : <Gallery media={media} />}
    </div>
  )
}

export default SearchPage
