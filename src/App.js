import React, { Component } from 'react';
import AppHeader from "./components/AppHeader";
import VideoComponent from "./components/JumboImage";
import ButtonPanel from "./components/GetInTouch";
import "./styles/code-fu-style.css";
const myProps = {
  header:"Front End Dev Basics",
  videoLinks: {html : "https://www.youtube.com/embed/UB1O30fR-EE",
              css : "https://www.youtube.com/embed/yfoY53QXEnI",
              javascript : "https://www.youtube.com/embed/hdI2bqOjy3c"}
  buttonLabels:["HTML","CSS","JavaScript"]
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <VideoComponent/>
        <ButtonPanel/>
      </div>
      
    );
  }
}

export default App;
