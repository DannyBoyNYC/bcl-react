import React, { Component } from 'react';

class Paragraph extends Component {
  render() {
    return (
      <div className="multimedia" id="audioAsset">
        <audio
          src="media/monstermash.mp3"
          className="audio-frame"
          autoPlay
          width="100%"
          controls
        />
      </div>
    );
  }
}

export default Paragraph;
