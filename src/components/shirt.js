import React, { Component } from 'react';

class Shirt extends Component {

  render() {
    return (
      <div className="shirt">
        <img style={{backgroundColor: this.props.color, width: 300}} src="shirt.svg" />
        <div className="text">{this.props.text}</div>
      </div>
    );
    // ...
  }
}

export default Shirt; // Don’t forget to use export default!
