import React, { Component } from 'react';

class MultimediaAudio extends Component {
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
        <p>Auto play</p>
      </div>
    );
  }
}

export default MultimediaAudio;
