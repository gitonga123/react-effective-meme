import React from 'react';
import logo from './logo.svg';
import './App.css';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      brand: "Toyota",
      model: "Allion",
      color: "Red",
      year: 2005
     };
  }
  changeColor = () => {
    this.setState({color: "Blue"});
  }
  render() { 
    return ( 
      <div>
        <h1>
          My {this.state.brand}
        </h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}
        </p>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}
 
export default Car;