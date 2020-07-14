import React from 'react';
import logo from './logo.svg';
import './App.css';

class Car extends React.Component {

  render() { 
    return ( 
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Color</th>
          </tr>
          <tr>
          <td>{this.props.name}</td>
          <td>{this.props.color}</td>
          </tr>
        </table>
      </div>
     );
  }
}
 
export default Car;
