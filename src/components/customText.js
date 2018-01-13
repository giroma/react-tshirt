import React, { Component } from 'react';

class CustomText extends Component {

  render() {
    return (
      <div>
        <input value={this.props.text} onChange={this.props.changeText}></input>
        <h1>{this.props.text}</h1>
      </div>
    );
    // ...
  }
}

export default CustomText; // Don’t forget to use export default!
