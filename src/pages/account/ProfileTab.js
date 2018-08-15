import React from 'react';
import { Field, reduxForm } from 'react-form';
import ProfileForm from './ProfileForm';

export default class ProfileTab extends React.Component {
    submit(values) {
        console.log('submitting')
    }

    render() {
        return (
        <div className="mdl-card mdl-shadow--2dp">    
            <div className="mdl-card__title mdl-card--expand">
                <h2 className="mdl-card__title-text">Profile Settings</h2>
            </div>
            <div className="mdl-card__supporting-text">
                <ProfileForm onSubmit={this.submit} />
            </div>
        </div>
        )
    }
}