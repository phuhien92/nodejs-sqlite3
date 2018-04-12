import React, {Component} from 'react';

class Home extends Component {

    render() {
        return (
            <div className="container">
                <h3>I'm the home component hello1</h3>
                <button onClick={() => console.log('hello')}>Click</button>
            </div>
        )
    }
}

export default {
    component: Home
};