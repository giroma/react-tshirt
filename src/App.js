import React, { Component } from 'react';
import './App.css';
import Price from './components/price';
import Custom from './components/custom';
import Shirt from './components/shirt';

class App extends Component {
  constructor() {
    super()
    this.state = {
      type: 'tshirt',
      material: 'light-cotton',
      color: 'white',
      textColor: 'black',
      text: 'write here'
    }
  }

    changeText = (e) => {
      this.setState({text: e.target.value})
    }

    changeType = (e) => {
      this.setState({type: e.target.value})
      this.setState({material: 'light-cotton'}) //set cotton and color to default to prevent unallowed color options
      this.setState({color: 'white'})
    }

    changeMaterial = (e) => {
      this.setState({material: e.target.value})
    }

    changeColor = (e) => {
      this.setState({color: e.target.value})
    }

    changeTextColor = (e) => {
      console.log(e.target);
      this.setState({textColor: e.target.style.backgroundColor})
    }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Custom state={this.state}
                    changeText={this.changeText}
                    changeType={this.changeType}
                    changeMaterial={this.changeMaterial}
                    changeColor={this.changeColor}
                    changeTextColor={this.changeTextColor}/>
          </div>

          <div className="col-md-4" style={{align: "center"}}>
            <Shirt text={this.state.text}
                   changeText={this.changeText}
                   color={this.state.color}
                   textColor={this.state.textColor}/>
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
