import React,{Component} from 'react';


class ButtonPanel extends Component {
  render(){
    return(
      <ul>
        <li><button>{this.props.buttonLabels[0]}</button></li>
        <li><button>{this.props.buttonLabels[1]}</button></li>
        <li><button>{this.props.buttonLabels[2]}</button></li>
      </ul>
    )
  }
}


export default ButtonPanel;