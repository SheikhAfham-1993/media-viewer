import './MediaInfo.css'
const MediaInfo = ({ media }) => {
  return (
    <div className="media-detail">
      <div className="media-license-container">
        {media.usagelicences.map((licence, index) => (
          <div key={licence.licenseid}>
            <div className="media-license">
              <span className="license-title">{licence.name}</span>
              <span className="credits">{licence.credits} credits</span>
            </div>
            <p className="price">
              Price: {licence.price} {licence.currency}
            </p>
            {index === 0 ? <hr /> : null}
          </div>
        ))}
      </div>

      <hr />

      <table className="table">
        <tr>
          <th>Creator</th>
          <td>{media.creator}</td>
        </tr>
        <tr>
          <th>Creation date</th>
          <td>
            {new Date(media.creationdate).toLocaleString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </td>
        </tr>
        <tr>
          <th>Size</th>
          <td>
            {media.height} x {media.width} PIXELS
          </td>
        </tr>
        <tr>
          <th>Caption</th>
          <td>{media.caption}</td>
        </tr>
      </table>
    </div>
  )
}

export default MediaInfo
