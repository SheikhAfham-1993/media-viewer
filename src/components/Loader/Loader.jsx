import './Loader.css'

/**
 * Render a loader component which is displayed when a user searches for some media.
 *
 * @return {JSX.Element} The loader component.
 */
const Loader = () => {
  return (
    <div className="lds-container">
      <div className="lds-ring">
        <div></div>
      </div>
    </div>
  )
}

export default Loader
