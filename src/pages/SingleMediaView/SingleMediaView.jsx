// import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import { fetchMedia } from '../../apis/fetchMedia'
import MediaInfo from '../../components/MediaInfo/MediaInfo'
import './SingleMediaView.css'

const SingleMediaView = () => {
  const singleMediaData = useLoaderData()
  return (
    <div className="single-media-container">
      <div className="hero-content">
        <span className="title">{singleMediaData.title}</span>
        <span>{singleMediaData.caption}</span>
        <div className="image-container">
          <img
            className="hero-media"
            alt="single-media"
            src={singleMediaData.mediasrc}
          />
        </div>
      </div>

      <MediaInfo media={singleMediaData} />
    </div>
  )
}

export default SingleMediaView

export const fetchSingleMedia = async ({ params }) => {
  let url = `https://1780bf9a-10a6-4235-8605-39539ff6a76b.mock.pstmn.io/media/${params.id}`
  let response = await fetchMedia(url)
  return response.data
}
