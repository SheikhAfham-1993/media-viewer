// import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import { fetchMedia } from '../../apis/fetchMedia'
import MediaInfo from '../../components/MediaInfo/MediaInfo'
import './SingleMediaView.css'
import NoMedia from '../../components/NoMedia/NoMedia'

const SingleMediaView = () => {
  const singleMediaData = useLoaderData()

  // Check if there is any media data available otherwise display a message
  return singleMediaData ? (
    <>
      <div className="single-media-container">
        {/* Section which displays the Image along with title and caption */}
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

        {/* The media object containing the information that a user has searched for. */}
        <MediaInfo media={singleMediaData} />
      </div>
    </>
  ) : (
    <NoMedia mediaText="No information available for the selected media" />
  )
}

export default SingleMediaView

/**
 * Retrieves a single media item from the server.
 *
 * @param {string} params.id - The ID of the media item to fetch.
 * @return {Promise<Object>|null} The fetched media item or null if an error occurred.
 */
export const fetchSingleMedia = async ({ params }) => {
  let url = `media/${params.id}`
  try {
    let response = await fetchMedia(url)
    return response.data
  } catch (error) {
    return null
  }
}
