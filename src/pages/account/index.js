import React, {Component} from 'react';
import EventForm from './../../components/common/EventForm';

class Account extends Component {

    render() {
        return (
            <div className="container">
                <h3>I'm the Account component hello1</h3>
                <button onClick={() => console.log('hello')}>Click</button>
            </div>
        )
    }
}

export default { component: Account }