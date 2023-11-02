import './SearchPage.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
const SearchPage = () => {
  const mockData = {
    'took-ms': 352,
    amount: 6,
    media: [
      {
        'media-id': 115446019,
        preview: '/bild/st/0115446019/w.jpg',
        height: 5180,
        width: 7695,
      },
      {
        'media-id': 138384880,
        preview: '/bild/st/0138384880/w.jpg',
        height: 5568,
        width: 3712,
      },
      {
        'media-id': 137849760,
        preview: '/bild/st/0137849760/w.jpg',
        height: 3537,
        width: 5315,
      },
      {
        'media-id': 150105569,
        preview: '/bild/st/0150105569/w.jpg',
        height: 2667,
        width: 4000,
      },
      {
        'media-id': 135909679,
        preview: '/bild/st/0135909679/w.jpg',
        height: 3648,
        width: 5472,
      },
      {
        'media-id': 115278567,
        preview: '/bild/st/0115278567/w.jpg',
        height: 7360,
        width: 4912,
      },
    ],
  }
  return (
    <div className="container">
      <div className="search-container">
        <div className="input-container">
          <input className="search-input" type="text" placeholder="Search.." />
          <XMarkIcon className="clear-input" />
        </div>
      </div>
      <div className="media-container media-content">
        {mockData.media.map((media) => (
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
    </div>
  )
}

export default SearchPage
