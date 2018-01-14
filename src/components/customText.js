import React, { Component } from 'react';

class CustomText extends Component {

  render() {
    return (
      <div className="well">
        <select value={this.props.value} onChange={this.props.changeType}>
          <option selected value="tshirt">T-shirt</option>
          <option value="sweater">Sweater</option>
        </select>
        <select>
          <option selected value="light-cotton">Light-Cotton</option>
          <option value="heavy-cotton">Heavy-Cotton +$3</option>
        </select>
        <select value={this.props.value} onChange={this.props.changeColor} >
          <option selected value="white">White</option>
          <option value="#262626">Black</option>
          <option value="green">Green +$2</option>
          <option value="red">Red +$2</option>
        </select>
        <input value={this.props.state.text} onChange={this.props.changeText}></input>
      </div>
    );
    // ...
  }
}

export default CustomText; // Don’t forget to use export default!
