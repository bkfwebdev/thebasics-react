import React, { Component } from 'react';
import AppHeader from "./components/AppHeader";
import VideoComponent from "./components/VideoComponent";
import ButtonPanel from "./components/ButtonPanel";

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    header:"Front End Dev Basics",
    videoLinks: ["https://www.youtube.com/embed/UB1O30fR-EE","https://www.youtube.com/embed/yfoY53QXEnI","https://www.youtube.com/embed/hdI2bqOjy3c"],
    currentVideo : "https://www.youtube.com/embed/UB1O30fR-EE",
    buttonLabels:["HTML","CSS","JavaScript"]
  }
}

  render() {
    return (
      <div className="App">
        <AppHeader header = {this.state.header}/>
        <VideoComponent videos = {this.state.currentVideo}/>
        <ButtonPanel buttonLabels = {this.state.buttonLabels}/>
      </div>
      
    );
  };
  
}

export default App;
