import React, { Component } from 'react'
import { connect } from 'react-redux';
import { db } from './../../../firebase';
import { eventsFetch } from '../../../actions';
import Event from './Event';
import styled from 'styled-components';

const EventListWrapper = styled.section`
    width: 100%;
    display: flex;
`;

class EventList extends Component {

    state = {
        toggleEvent: ''
    }

    componentDidMount () {
        let {
            auth: { user }
        } = this.props;
        this.props.eventsFetch(user.uid);
    }

    toggleDropdown = (id) => {
        let toggleEventId = this.state.toggleEvent === id ? '':id;

        this.setState({
            toggleEvent: toggleEventId
        })
    }

    render () {
        let {
            events
        } = this.props;

        let view = events.map( (event) => {
            return (
                <Event {...event} key={event.id} toggleDropdown={this.toggleDropdown} toggleEvent={this.state.toggleEvent}/>
            )
        });
        
        return (
            <EventListWrapper>
                {view}
            </EventListWrapper>
        )
    }
}

const mapStateToProps = ({
    auth,
    events: {
        events
    }
}) => ({
    auth,
    events
})

const mapDispatchToProps = dispatch => ({
    eventsFetch: (uid) => dispatch(eventsFetch(uid))
})

export default connect(mapStateToProps,mapDispatchToProps)(EventList);