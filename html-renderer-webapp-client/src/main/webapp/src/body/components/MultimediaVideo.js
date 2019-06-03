import React, { Component } from 'react';

class MultimediaVideo extends Component {
  render() {
    return (
      <div className="multimedia" id="videoAsset">
        <video
          src="https://aegdmbarclays-a.akamaihd.net/US/research/globalOutlook/335-29924.mp4"
          poster="img/posterframe.png"
          className="video-frame"
          width="100%"
          height="auto"
          controls
        />
      </div>
    );
  }
}

export default MultimediaVideo;
