import React from 'react'
import BodyWrapper from '../../components/BodyWrapper';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Router from 'next/router';
import EventTypes from '../../components/EventTypes';
import { AuthWrapper } from '../../helpers/grid';
import * as types from './../../actions/actionTypes';
import WhatEventForm from '../../components/WhatEventForm';
import AvailabilityForm from '../../components/AvailabilityForm';
import { fetchEventById, fetchAvailablityByUIDandEventId } from '../../actions/event';
import {withRouter} from 'next/router'

class Content extends React.Component {
    // step guide
    // 0 : close all
    // other number: open # tab
    state = {
        event: {},
        availability: {}
    }

    static async getInitialProps({router: {query}}) {
        return {
            query
        }
    }

    componentDidMount () {
        let {
            router: {
                query
            }
        } = this.props;

        this.props.fetchEvent(query.id).then(evt => {
            let event = {
                ...evt,
                eventId: query.id
            };
            this.setState({event})
        })

        this.props.fetchAvailablity(query.id).then(avai => {
            this.setState({availability: avai})
        })
    }

    render() {

        return (
            <AuthWrapper>
                <h1>Edit Event Type</h1>
                <WhatEventForm 
                    event={this.state.event}
                    availability={this.state.availability}
                    action="update" 
                    {...this.props}
                />
            </AuthWrapper>
        )
    }
}

Content.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = ({auth: {isAuthenticated}}) => ({
    isAuthenticated
})

const mapDispatchToProps = dispatch => ({
    fetchEvent: (id) => dispatch(fetchEventById(id)),
    fetchAvailablity: (eventId) => dispatch(fetchAvailablityByUIDandEventId(eventId))
});

const EditEventPage = withRouter(props => (
    <BodyWrapper template='admin'>
        <Content {...props}/>
    </BodyWrapper>
));

export default connect(mapStateToProps, mapDispatchToProps)(EditEventPage);