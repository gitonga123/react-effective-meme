import React from 'react'

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { completed: props.completed }
    }
    updateTaskComplete = () => {
        this.setState({completed: !this.state.completed});
    }
    render() { 
        return ( 
            <div className="todo-item">
                <input type="checkbox" onChange={this.updateTaskComplete} checked={this.state.completed}/>
                <p>{this.props.text}</p>
            </div>
        );
    }
}
 
export default TodoItem;
