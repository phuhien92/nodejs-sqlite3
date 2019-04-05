import React, { Component } from 'react'
import { connect } from 'react-redux';
import { eventsFetch } from '../../actions';
import Event from './Event';
import styled from 'styled-components';
import { hidePageLoading } from '../../actions';

const EventListWrapper = styled.section`
    width: 100%;
    display: flex;
`;

class EventList extends Component {

    state = {
        toggleEvent: '',
        events: []
    }

    componentWillMount () {
        let {
            auth: { user }
        } = this.props;
        this.props.eventsFetch(user.uid)
            .then(events => {
                this.setState({
                    events
                })
            });
        this.props.hidePageLoading();
    }

    toggleDropdown = (id) => {
        let toggleEventId = this.state.toggleEvent === id ? '':id;

        this.setState({
            toggleEvent: toggleEventId
        })
    }

    render () {

        return (
            <EventListWrapper>
                {   this.state.events.length > 0 &&
                    this.state.events.map( (event,index) => (
                    <Event {...event} key={index} toggleDropdown={this.toggleDropdown} toggleEvent={this.state.toggleEvent}/>
                    ))
                }
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
    eventsFetch: (uid) => dispatch(eventsFetch(uid)),
    hidePageLoading: () => dispatch(hidePageLoading())
})

export default connect(mapStateToProps,mapDispatchToProps)(EventList);