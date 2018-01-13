import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Price from './components/price';
import CustomText from './components/customText';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      price: 5555,
      type: 'tshirt',
      material: 'light-cotton',
      color: 'green',
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
      console.log();
      this.setState({text: e.target.value})
    }
    //functions in constructor
  }

  render() {
    console.log(this);
    return (
      <div className="App">
        <img style={{backgroundColor: "red", width: 500}} src="shirt.svg" />
        <h1>whoop there it is </h1>
        <Price price={this.state.price} color={this.state.color}/>
        <CustomText text={this.state.text} changeText={this.changeText}/>
      </div>
    );
  }
}

export default App;
