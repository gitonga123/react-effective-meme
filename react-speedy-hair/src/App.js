import React from 'react';
import './App.css';
import Header from './component/Header';
import TodoItem from './component/TodoItem'
import todoData from './todosData'

class App extends React.Component {
  render() {
    const todosData = todoData.map(todoItem => <TodoItem key={todoItem.id} text={todoItem.text} completed={todoItem.completed} />)
    return (
      <div className="todo-list">
        <Header />
        {todosData}
      </div>
    )
  }
}

export default App;