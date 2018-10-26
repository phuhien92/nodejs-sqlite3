import React from 'react'
import BodyWrapper from '../../components/BodyWrapper';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Router from 'next/router';
import EventTypes from '../../components/EventTypes';
import { Wrapper } from '../../helpers/grid';
import * as types from './../../actions/actionTypes';
import WhatEventForm from '../../components/WhatEventForm';

class EditEventPage extends React.Component {

    state = {
        step: 1
    }

    static async getInitialProps({req: {url},query}) {
        return {
            url,
            query
        }
    }

    componentDidMount() {
        
    }

    toggleForm = (evt) => {
        let target = evt.target,
            step   = target.getAttribute('step');

        if (step && parseInt(step)) {
            this.props.toggleEditEventTab(parseInt(step))
        }
    }

    render() {
        
        let {
        } = this.props;

        return (
            <BodyWrapper>
                <Wrapper>
                    <h1>Edit Event Type</h1>
                    <WhatEventForm type="update" {...this.props} />
                </Wrapper>
            </BodyWrapper>
        )
    }
}

EditEventPage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = ({auth: {isAuthenticated}}) => ({
    isAuthenticated
})

const mapDispatchToProps = dispatch => ({
    toggleEditEventTab: (id) => dispatch({type: types.TOGGLE_EDIT_EVENT_TAB, payload: id}),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEventPage)