import './NoMedia.css'

/**
 * Renders a component when there is no media available.
 *
 * @param {string} mediaText - The text to be displayed when there is no media available.
 * @return {JSX.Element} The rendered component.
 */
const NoMedia = ({ mediaText }) => {
  return <div className="no-media">{mediaText}</div>
}

export default NoMedia
