import React, { Component } from 'react';

class VideoComponent extends Component {
  render() {
    return (
<div  className="video-box">
       <iframe className="video-content" src={this.props.videolink} >Video Goes Here</iframe>
</div>   
    );
  }
}

export default VideoComponent;