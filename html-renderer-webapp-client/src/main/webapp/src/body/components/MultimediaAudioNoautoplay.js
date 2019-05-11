import React, { Component } from 'react';

class MultimediaAudioNoautoplay extends Component {
  render() {
    return (
      <div className="multimedia">
        <audio
          src="media/monstermash.mp3"
          className="audio-frame"
          width="100%"
          controls
          autoPlay
        />
        <p>No auto play</p>
      </div>
    );
  }
}

export default MultimediaAudioNoautoplay;
