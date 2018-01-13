import React, { Component } from 'react';

class Price extends Component {
  render() {
    console.log(this);
    return (
      <h1 style={{color: this.props.color}}>{this.props.price}</h1>
    );
    // ...
  }
}

export default Price; // Don’t forget to use export default!
