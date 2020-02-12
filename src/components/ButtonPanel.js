import React, { Component } from 'react';

class ButtonPanel extends Component {

render() {
    return (
        <div className = "ButtonPanel">
        <ul>
            <li><button onClick={changeToHTML}>{this.props.buttonlabels[0]}</button></li>
            <li><button onClick={changeToCSS}>{this.props.buttonlabels[1]}</button></li>
            <li><button onClick={changeToJS}>{this.props.buttonlabels[2]}</button></li>
        </ul>  
        </div>
    );
  }
}

export default ButtonPanel;