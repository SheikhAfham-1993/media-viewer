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
        <h3>{mockMediaData.title}</h3>
        <img alt="single-media" src={mockMediaData.mediasrc} />
      </div>

      <div>
        <p>{mockMediaData.caption}</p>
        <p>{mockMediaData.creationdate}</p>
        <p>{mockMediaData.creator}</p>
        <p>
          height: {mockMediaData.height} x width: {mockMediaData.width}
        </p>
        {mockMediaData.usagelicences.map((licence) => (
          <div key={licence.licenseid}>
            <p>{licence.name}</p>
            <p>
              {licence.price} {licence.currency}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SingleMediaView
