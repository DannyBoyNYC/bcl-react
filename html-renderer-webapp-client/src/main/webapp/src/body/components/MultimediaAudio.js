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
        <p>Autoplay enabled and {this.props.status}</p>
      </div>
    );
  }
}

export default MultimediaAudio;
