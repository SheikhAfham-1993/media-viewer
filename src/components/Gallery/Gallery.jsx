import { Link } from 'react-router-dom'
import './Gallery.css'

/**
 * Renders a gallery component with the given media.
 *
 * @param {Array} media - Media object which is selected from the search page.
 * @return {JSX.Element} The rendered gallery component.
 */
const Gallery = ({ media }) => {
  return (
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
  )
}

export default Gallery
