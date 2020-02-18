import React, { Component } from 'react';

class AppHeader extends  Component {
render(){
  return (
    <h1>{this.props.header}</h1>
  )
}

}

export default AppHeader