import { XMarkIcon } from '@heroicons/react/24/solid'
import './SearchMedia.css'
const SearchMedia = ({ fetchMedia }) => {
  return (
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
  )
}

export default SearchMedia
