import React from 'react';
import ReactDOM from 'react-dom'
import Header from './App';


// ReactDOM.render(<Header favCol="Yellow"/>, document.getElementById('root'));
class Football extends React.Component {
    shoot() {
        alert("Great Shot!");
    }
    render() {
        return (
            <button onClick={this.shoot}>
                Take the shot!
            </button>
        );
    }
}

ReactDOM.render(<Football />, document.getElementById('root'))