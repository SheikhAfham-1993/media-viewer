import { XMarkIcon } from '@heroicons/react/24/solid'
import './SearchMedia.css'

/**
 * Renders a search input field with an optional clear button.
 *
 * @param {object} fetchMedia - A function that fetches media based on a search query.
 * @return {JSX.Element} The rendered search input field.
 */
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
