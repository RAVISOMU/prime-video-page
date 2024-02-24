import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {eachMovie} = props
  const {thumbnailUrl, videoUrl} = eachMovie

  return (
    <div>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} className="thumbnail" alt="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <div className="popup-container">
            <button
              data-testid="closeButton"
              className="close-button"
              onClick={() => close()}
              type="button"
            >
              <IoMdClose className="close-icon" />
            </button>
            <div className="video-player-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
