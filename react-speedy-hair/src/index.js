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

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
            errorMessage: '',
            description: "The content of a textarea goes in the value attribute"
        };
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.username);
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (nam === "age") {
            if (!Number(val)) {
                err = <strong>Your age must be a number</strong>;
            }
        }
        this.setState({errorMessage: err});
        this.setState({[nam]: val })
    }
    render() {
        let header = '';
        if (this.state.username) {
        header = <h1>Hello {this.state.username} am {this.state.age}. {this.state.description}</h1>
        } else {
            header = '';
        }
        return (
            <form onSubmit={this.mySubmitHandler}>
                {header}
                <p>Enter your name:</p>
                <input type="text" name="username" onChange={this.myChangeHandler} />
                <p>Enter your Age:</p>
                <input type="text" name="age" onChange={this.myChangeHandler} />
                <p>About yourself</p>
                <textarea value = {this.state.description}/>
                <input type="submit" />
                {this.state.errorMessage}
            </form>
        )
    }
}
class MyHeader extends React.Component {
    render () {
        const myStyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        }
        return (
            <div>
                <h1 style={myStyle}>Hello Style!</h1>
                <p>Add a little style!</p>
            </div>
        );
    }
}
ReactDOM.render(<MyHeader />, document.getElementById('root'))