import React, { Component } from 'react';

class Price extends Component {
  render() {
    const prices = {
      tshirt: 16.95,
      sweater: 28.95,
      heavyCotton: 3,
      tshirtColor: 2,
      sweaterColor: 4
    }
    let totalPrice = 0
    let receipt = []

    this.priceDisplay = () => {
      if (this.props.state.type === "tshirt"){
        totalPrice = 0
        totalPrice += prices.tshirt
        receipt.push(<p>T-shirt<span>${prices.tshirt}</span></p>)
        if (this.props.state.material === "heavy-cotton") {
          totalPrice += prices.heavyCotton
          receipt.push(<p>Heavy Cotton<span>${prices.heavyCotton}</span></p>)
        }
        if (this.props.state.color === "green" || this.props.state.color === "red") {
          totalPrice += prices.tshirtColor
          receipt.push(<p>Color<span>${prices.tshirtColor}</span></p>)
        }
      }
      else {  // sweaters
        totalPrice = 0
        totalPrice += prices.sweater
        receipt.push(<p>Sweater<span>${prices.sweater}</span></p>)
        if (this.props.state.color === "pink" || this.props.state.color === "yellow") {
          totalPrice += prices.sweaterColor
          receipt.push(<p>Color<span>${prices.sweaterColor}</span></p>)
        }
      }
    }
    return (
      <div className="price well">
        <h2>Price:</h2>
        {this.priceDisplay()}
        {receipt}
        <p><b>Total</b><span>${totalPrice}</span></p>
      </div>
    );
  }
}

export default Price; // Don’t forget to use export default!
