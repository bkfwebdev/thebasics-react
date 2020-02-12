import React, { Component } from 'react';
import AppHeader from "./components/AppHeader";
import VideoComponent from "./components/VideoComponent";
import ButtonPanel from "./components/ButtonPanel";

const state = {

};


class App extends Component {
  constructor (props){
    this.state = {
      header:"Front End Dev Basics",
      videoLinks: ["https://www.youtube.com/embed/UB1O30fR-EE","https://www.youtube.com/embed/yfoY53QXEnI","https://www.youtube.com/embed/hdI2bqOjy3c"],
      currentVideo : "https://www.youtube.com/embed/UB1O30fR-EE",
      buttonLabels:["HTML","CSS","JavaScript"]
    }
    this.changeToHTML = this.changeToHTML.bind(this);
    this.changeToCSS = this.changeToCSS.bind(this);
    this.changeToJS = this.changeToJS.bind(this);

  }

  changeToHTML(){
    this.setState(state => ({
      currentVideo : state.videoLinks[0]
    }));
  }

  changeToCSS(){
    this.setState(state => ({
      currentVideo : state.videoLinks[1]
    }));
  }

  changeToJS(){
    this.setState(state =>({
      currentVideo : state.videoLinks[2]
    }));
  }

  render() {
    return (
      <div className="App">
        <AppHeader header = {state.header}/>
        <VideoComponent videos = {state.currentVideo}/>
        <ButtonPanel buttons = {state.buttonLabels}/>
      </div>
      
    );
  }
}

export default App;
