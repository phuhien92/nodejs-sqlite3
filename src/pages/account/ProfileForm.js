import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ProfileForm = props => {
    const { handleSubmit } = props

    return (
        <form onSubmit={handleSubmit}>
            <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                <label className="mdl-textfield__label" htmlFor="name">Name</label>
                <Field className="mdl-textfield__input" name="name" component="input" type="text" />
            </div>
            <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                <label className="mdl-textfield__label" htmlFor="name">Welcome Message</label>
                <Field className="mdl-textfield__input" name="message" component="textarea" type="text" row='10' />
            </div>
            <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                <label className="mdl-textfield__label" htmlFor="name">Timezone</label>
                <Field className="mdl-textfield__input" name="timezone" component="select">
                    <option />
                    <option value="ff0000">Red</option>
                    <option value="00ff00">Green</option>
                    <option value="0000ff">Blue</option>
                </Field>
            </div>
            <div class="mdl-card__actions mdl-card--border">
                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Get Started
                </a>
            </div>
        </form>
    )
}

export default ProfileForm = reduxForm({
    form: 'profile'
})(ProfileForm);
