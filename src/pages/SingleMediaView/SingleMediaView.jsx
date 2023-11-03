// import { useParams } from 'react-router-dom'
import './SingleMediaView.css'
const SingleMediaView = () => {
  const mockMediaData = {
    caption:
      'IMAGO Creative: Stadtlandschaften - Straßen von Berlin Low angle view of World Clock in Alexanderplatz square, Berlin City Copyright: PabloxCamacho B18116043',
    categories: [],
    cliplength: 0,
    creationdate: '2021-03-15 00:00:00.000',
    creator: 'PhotoAlto',
    height: 5180,
    keywords: '',
    licencelanguagepointer: 'licencegroup2',
    licensetype: 'RFS',
    masterimage: null,
    mediaid: 115446019,
    mediaidpadded: '0115446019',
    mediaprev: null,
    mediasrc: 'https://www.imago-images.com/bild/st/0115446019/m.jpg',
    mediathumb: 'https://www.imago-images.com/bild/st/0115446019/s.jpg',
    mediatype: 'image',
    similarmedia: null,
    source: 'st',
    territoryrestrictions: '',
    title:
      'IMAGO Creative: Stadtlandschaften - Straßen von Berlin Low angle view of World Clock in Alexanderpl',
    usagelicences: [
      {
        credits: 1,
        currency: 'EURO',
        languagePointer: 'licence3',
        name: 'Web',
        price: 900,
        licenseid: 3,
      },
      {
        credits: 20,
        currency: 'EURO',
        languagePointer: 'licence4',
        name: 'Full RF',
        price: 9900,
        licenseid: 4,
      },
    ],
    width: 7695,
    mediaReference: {
      id: 115446019,
      source: 'st',
      type: 'image',
    },
    searchindexing: true,
  }
  // const params = useParams()
  return (
    <div className="single-media-container">
      <div className="hero-content">
        <span className="title">{mockMediaData.title}</span>
        <span>{mockMediaData.caption}</span>
        <img alt="single-media" src={mockMediaData.mediasrc} />
      </div>

      <div className="media-detail">
        <div className="media-license-container">
          {mockMediaData.usagelicences.map((licence, index) => (
            <div key={licence.licenseid}>
              <div className="media-license">
                <span className="title-license">{licence.name}</span>
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
            <td>{mockMediaData.creator}</td>
          </tr>
          <tr>
            <th>Creation date</th>
            <td>
              {new Date(mockMediaData.creationdate).toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </td>
          </tr>
          <tr>
            <th>Size</th>
            <td>
              {mockMediaData.height} x {mockMediaData.width} PIXELS
            </td>
          </tr>
          <tr>
            <th>Caption</th>
            <td>{mockMediaData.caption}</td>
          </tr>
        </table>
        <p></p>
      </div>
    </div>
  )
}

export default SingleMediaView
