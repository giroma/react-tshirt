import React, { Component } from 'react';

class Price extends Component {
  render() {
    const prices = {   //cost of various options
      tshirt: 16.95,
      sweater: 28.95,
      heavyCotton: 3,
      tshirtColor: 2,
      sweaterColor: 4,
      textColor: 3
    }
    let totalPrice = 0  //add to this variable for tatal sum price
    let receipt = [] //each array element is a line in the receipt

    this.priceDisplay = () => {
      if (this.props.state.type === "tshirt"){  //if tshirt selected
        totalPrice += prices.tshirt //add to total price
        receipt.push(<p>T-shirt<span>${prices.tshirt}</span></p>) //add this jsx to the array for display later
        if (this.props.state.material === "heavy-cotton") {
          totalPrice += prices.heavyCotton
          receipt.push(<p>Heavy Cotton<span>+${prices.heavyCotton}</span></p>)
        }
        if (this.props.state.color === "green" || this.props.state.color === "red") {
          totalPrice += prices.tshirtColor
          receipt.push(<p>Color<span>+${prices.tshirtColor}</span></p>)
        }
      }
      else {  // sweater
        totalPrice += prices.sweater
        receipt.push(<p>Sweater<span>${prices.sweater}</span></p>)
        if (this.props.state.color === "pink" || this.props.state.color === "yellow") {
          totalPrice += prices.sweaterColor
          receipt.push(<p>Color<span>+${prices.sweaterColor}</span></p>)
        }
      }
      if (this.props.state.textColor !== "white" && this.props.state.textColor !== "black") {
        totalPrice += prices.textColor
        receipt.push(<p>Text Color<span>+${prices.textColor}</span></p>)
      }
    }
    return (
      <div className="price well">
        <h3>Price:</h3>
        {this.priceDisplay()}
        {receipt}
        <p><b>Total<span>${totalPrice}</span></b></p>
      </div>
    );
  }
}

export default Price; // Don’t forget to use export default!
