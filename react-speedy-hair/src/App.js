import React from 'react';
import './App.css';
import Header from './component/Header';
import TodoItem from './component/TodoItem'

class App extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <Header />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    )
  }
}

export default App;
