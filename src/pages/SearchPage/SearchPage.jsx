import './SearchPage.css'

import axios from 'axios'
import { useEffect, useState } from 'react'
import Loader from '../../components/Loader/Loader'
import SearchMedia from '../../components/SearchMedia/SearchMedia'
import Gallery from '../../components/Gallery/Gallery'

const SearchPage = () => {
  const [media, setMedia] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchMedia = async (query = '') => {
    let url =
      'https://1780bf9a-10a6-4235-8605-39539ff6a76b.mock.pstmn.io/search'
    if (query) {
      url = `https://1780bf9a-10a6-4235-8605-39539ff6a76b.mock.pstmn.io/search?query=${query}`
    }
    setIsLoading(true)
    const response = await axios.get(url)
    setMedia(response.data.media)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchMedia()
  }, [])

  return (
    <div className="container">
      <SearchMedia fetchMedia={fetchMedia} />
      {isLoading ? <Loader /> : <Gallery media={media} />}
    </div>
  )
}

export default SearchPage
