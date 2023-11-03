import './SearchPage.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Loader from '../../components/Loader/Loader'

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
      <div className="search-container">
        <div className="input-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search.."
            onKeyDown={(e) => {
              if (e.key === 'Enter') fetchMedia(e.target.value)
            }}
          />
          <XMarkIcon className="clear-input" />
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="media-container media-content">
          {media?.map((media) => (
            <Link
              key={media['media-id']}
              to={`/singlemediaview/${media['media-id']}`}
            >
              <img
                className="media img"
                alt="imago-media"
                src={`https://www.imago-images.com/${media.preview}`}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchPage
