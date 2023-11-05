// import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import { fetchMedia } from '../../apis/fetchMedia'
import MediaInfo from '../../components/MediaInfo/MediaInfo'
import './SingleMediaView.css'
import NoMedia from '../../components/NoMedia/NoMedia'

const SingleMediaView = () => {
  const singleMediaData = useLoaderData()
  return singleMediaData ? (
    <>
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
    </>
  ) : (
    <NoMedia mediaText="No information available for the selected media" />
  )
}

export default SingleMediaView

export const fetchSingleMedia = async ({ params }) => {
  let url = `media/${params.id}`
  let response = await fetchMedia(url)
  return response.data
}
