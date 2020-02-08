import React, { Component } from 'react';

class ButtonPanel extends Component {
  render() {
    return (
        <div className = "ButtonPanel">
        <ul>
            <li><button id="basic1">{this.props.button[1]}</button></li>
            <li><button id="basic2">{this.props.button[2]}</button></li>
            <li><button id="basic3">{this.props.button[3]}</button></li>
        </ul>  
        </div>
    );
  }
}

export default ButtonPanel;