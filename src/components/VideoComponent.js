import React, { Component } from 'react';

class VideoComponent extends Component {
  render() {
    return (
<div className = "video-box">
       <iframe title="video-content" src={this.props.currentVideo}>Video Goes Here</iframe>
</div>   
    );
  }
}

export default VideoComponent;