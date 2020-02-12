import React, { Component } from 'react';

class AppHeader extends Component {
  render() {
    return (
<div  className="AppHeader">
       <h1>{this.props.header}</h1>
</div>   
    );
  }
}

export default AppHeader;