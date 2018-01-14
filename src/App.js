import React, { Component } from 'react';
import './App.css';
import Price from './components/price';
import CustomText from './components/customText';
import Shirt from './components/shirt';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      price: 5555,
      type: 'tshirt',
      material: 'light-cotton',
      color: 'white',
      text: 'write here'

    }
    // TODO: Make a change handler function for each data property in your state
    // TODO: make a function that calculates price based on your data properties

    // this.calculatePrice = () => {
    //   const total = calculate here
    //   this.setState({ price: total})
    // }
    this.changeText = (e) => {
      // this.calculatePrice();
      this.setState({text: e.target.value})
    }
    this.changeColor = (e) => {
      // this.calculatePrice();
      console.log(e.target.value);
      this.setState({color: e.target.value})
    }
    //functions in constructor
  }

  render() {
    return (
      <div className="App" className="container">
        <div className="row">
          <div className="col-3">
            <CustomText text={this.state.text} changeText={this.changeText}
                        color={this.state.color} changeColor={this.changeColor}/>
          </div>

          <div className="col-6">
            <Shirt text={this.state.text} changeText={this.changeText}
                   color={this.state.color}/>
          </div>

          <div className="col">
            <Price price={this.state.price} color={this.state.color}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
