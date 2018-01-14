import React, { Component } from 'react';

class Price extends Component {
  render() {
    this.priceDisplay = () => {
      if (this.props.state.type === "tshirt"){
        console.log("shirts");
        return <h1>tshirts</h1>
      }
      else {
        console.log("sweaters");
        return <h1>sweaters</h1>
      }
    }
    return (
      this.priceDisplay()
    );
    // ...
  }
}

export default Price; // Don’t forget to use export default!
