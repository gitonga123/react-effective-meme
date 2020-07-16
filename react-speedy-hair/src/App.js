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

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" , brand: "Allion"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoriteColor: props.favCol}
  }

  shouldComponentUpdate() {
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML = "Before the update the favorite was " + prevState.favoriteColor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML = "The updated favorite is " + this.state.favoriteColor
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({brand: "Nissan"})
    }, 1000);
  }
  render() { 
    return ( 
       <div>
         <h1>
           My Favorite Color is {this.state.favoriteColor} and The Brand is {this.state.brand}
         </h1>
         <div id="div1"></div>
         <div id="div2"></div>
        <button type="button" onClick={this.changeColor}>Change Color</button>
       </div>
     );
  }
}
 
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true }
  }
  delHeader = () => {
    this.setState({show: false})
  }

  render() { 
    let myHeader;
      if (this.state.show) {
        myHeader = <Child />
      };
    return ( 
      <div>
        {myHeader}
        <button type="button" onClick={this.delHeader}>
          Delete Header
        </button>
      </div>
     );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() { 
    return ( <h1>Hello World!</h1> );
  }
}
 
// export default Child;
 
export default Container;
 
// export default Header;

// export default Car;