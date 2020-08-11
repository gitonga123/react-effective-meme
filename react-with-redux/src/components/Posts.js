import React, { Component } from 'react'

export default class PostForm extends Component {
    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => console.log(data)).catch(console.error());
    }
    render() {
        return (
            <div>
                <h1>Post</h1>
            </div>
        )
    }
}
