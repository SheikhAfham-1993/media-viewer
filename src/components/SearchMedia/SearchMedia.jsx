import { XMarkIcon } from '@heroicons/react/24/solid'
import './SearchMedia.css'
import { useRef } from 'react'

/**
 * Renders a search input field with an optional clear button.
 *
 * @param {object} fetchMediaData - A function that fetches media based on a search query.
 * @return {JSX.Element} The rendered search input field.
 */
const SearchMedia = ({ fetchMediaData }) => {
  const searchInputRef = useRef(null)
  return (
    <div className="search-container">
      <div className="input-container">
        <input
          ref={searchInputRef}
          className="search-input"
          type="text"
          placeholder="Search.."
          onKeyDown={(e) => {
            if (e.key === 'Enter') fetchMediaData(e.target.value)
          }}
        />
        <XMarkIcon
          onClick={() => (searchInputRef.current.value = '')}
          className="clear-input"
        />
      </div>
    </div>
  )
}

export default SearchMedia
