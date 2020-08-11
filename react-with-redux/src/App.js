import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Posts />
        </main>
      </div>
    )
  }
}

