import { Link } from 'react-router-dom'
import './Gallery.css'
import NoMedia from '../NoMedia/NoMedia'

/**
 * Renders a gallery component with the given media.
 *
 * @param {Array} media - Media object that contains all the media data.
 * @return {JSX.Element} The rendered gallery component.
 */
const Gallery = ({ media }) => {
  return (
    <div className="media-container media-content">
      {/* Check if there is any media otherwise display a message */}
      {media.length > 0 ? (
        media?.map((media) => (
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
        ))
      ) : (
        <NoMedia mediaText="No media found" />
      )}
    </div>
  )
}

export default Gallery
