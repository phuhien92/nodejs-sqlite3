import React, {Component} from 'react';

export default class DashBoard extends Component {

    render() {
        return (
            <div className="container">
                <h3>I'm the DashBoard component hello1</h3>
                <button onClick={() => console.log('hello')}>Click</button>
            </div>
        )
    }
}