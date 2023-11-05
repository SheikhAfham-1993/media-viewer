import React from 'react'
import './MediaInfo.css'

/**
 * Renders the media information.
 *
 * @param {Object} media - The media object containing the information that a user has searched for.
 * @return {JSX.Element} The JSX element representing the rendered media information.
 */
const MediaInfo = ({ media }) => {
  // Converting to an array to avoid unnecessary html tags
  let detailInfo = [
    {
      label: 'Creator',
      value: media.creator,
    },
    {
      label: 'Creation date',
      value: new Date(media.creationdate).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    },
    {
      label: 'Size',
      value: `${media.height} x ${media.width} PIXELS`,
    },
    {
      label: 'Caption',
      value: media.caption,
    },
  ]

  return (
    <div className="media-detail">
      <div className="media-license-container">
        {/* License information */}
        {media.usagelicences.map((licence, index) => (
          <div key={licence.licenseid}>
            <div className="media-license">
              <span className="license-title">{licence.name}</span>
              <span className="credits">{licence.credits} credits</span>
            </div>
            <p className="bold-labels">
              Price: {licence.price} {licence.currency}
            </p>
            {index === 0 ? <hr /> : null}
          </div>
        ))}
      </div>
      <hr />
      {/*Other information */}
      <div className="media-info-container">
        {detailInfo.map((detail, index) => (
          <React.Fragment key={index}>
            <span className="bold-labels">{detail.label}</span>
            <span className="media-info-container-item">{detail.value}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default MediaInfo
