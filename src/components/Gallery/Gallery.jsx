import { Link } from 'react-router-dom'
import './Gellery.css'
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
