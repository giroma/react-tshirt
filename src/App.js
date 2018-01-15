import React, { Component } from 'react';
import './App.css';
import Price from './components/price';
import Custom from './components/custom';
import Shirt from './components/shirt';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'tshirt',
      material: 'light-cotton',
      color: 'white',
      textColor: 'black',
      text: 'write here'

    }

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
      console.log(e.target);
      this.setState({textColor: e.target.style.backgroundColor})
    }
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
