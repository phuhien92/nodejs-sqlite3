import React from 'react';
import PropTypes from 'prop-types';

export default class ContextWrapper extends React.Component {
    static get childContextTypes() {
        return { data: PropTypes.object }
    }

    getChildContext() {
        console.log(this.props.data)
        return {data: this.props.data}
    }

    render() {
        return this.props.children;
    }
}