import React, { Component } from 'react';
import './App.css';
import Price from './components/price';
import CustomText from './components/customText';
import Shirt from './components/shirt';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'tshirt',
      material: 'light-cotton',
      color: 'white',
      textColor: 'gray',
      text: 'write here'

    }
    // TODO: Make a change handler function for each data property in your state
    // TODO: make a function that calculates price based on your data properties

    // this.calculatePrice = () => {
    //   const total = calculate here
    //   this.setState({ price: total})
    // }
    this.changeText = (e) => {
      this.setState({text: e.target.value})
    }
    this.changeType = (e) => {
      this.setState({type: e.target.value})
      this.setState({material: 'light-cotton'})
      this.setState({color: 'white'})
    }
    this.changeMaterial = (e) => {
      this.setState({material: e.target.value})
    }
    this.changeColor = (e) => {
      this.setState({color: e.target.value})
    }
    this.changeTextColor = (e) => {
      this.setState({textColor: e.target.value})
    }
  }
    //functions in constructor

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <CustomText state={this.state} changeText={this.changeText}
                        changeType={this.changeType} changeMaterial={this.changeMaterial}
                        changeColor={this.changeColor}/>
          </div>

          <div className="col-md-4" style={{align: "center"}}>
            <Shirt text={this.state.text} changeText={this.changeText}
                   color={this.state.color}/>
          </div>

          <div className="col-md-4">
            <Price state={this.state}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
