import React, { Component } from 'react';

class CustomText extends Component {

  render() {
    let isSweater = false
    if (this.props.state.type == "sweater") {
      isSweater = true
    }
    return (
      <div className="custom well">
        <select value={this.props.value} onChange={this.props.changeType}>
          <option selected value="tshirt">T-shirt</option>
          <option value="sweater">Sweater</option>
        </select>
        <select value={this.props.value} onChange={this.props.changeMaterial}>
          <option selected value="light-cotton">Light-Cotton</option>
          {!isSweater ? <option value="heavy-cotton">Heavy-Cotton +$3</option> : "" }
        </select>
        <select value={this.props.value} onChange={this.props.changeColor} >
          <option selected value="white">White</option>
          <option value="#262626">Black</option>
          {!isSweater ? <option value="green">Green +$2</option>: "" }
          {!isSweater ? <option value="red">Red +$2</option>: "" }
          {isSweater ?  <option value="pink">Pink +$4</option>: "" }
          {isSweater ?  <option value="yellow">Yellow +$4</option>: "" }
        </select>
        <input value={this.props.state.text} onChange={this.props.changeText}></input>
      </div>
    );
  }
}

export default CustomText; // Don’t forget to use export default!
