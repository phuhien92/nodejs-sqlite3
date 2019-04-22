import React, { Component } from 'react'
import { connect } from 'react-redux';
import { eventsFetch } from '../../actions';
import Event from './Event';
import styled from 'styled-components';
import { hidePageLoading } from '../../actions';

const EventListWrapper = styled.table`
    margin: 0 50px 20px 50px;
    box-shadow: 2px 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
    background: #fff;
    max-width: 1200px;
    width: 100%;
`;

const StyledTh = styled.th`
    border-bottom: 1px solid #ddd;
    padding: 30px 0 30px 0;
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
                <thead>
                    <tr>
                        <StyledTh>Event Name</StyledTh>
                        <StyledTh>Allow bookings</StyledTh>
                        <StyledTh>Duration</StyledTh>
                        <StyledTh>Action</StyledTh>
                    </tr>
                </thead>
                <tbody>
                {   this.state.events.length > 0 &&
                    this.state.events.map( (event,index) => (
                    <Event {...event} key={index} toggleDropdown={this.toggleDropdown} toggleEvent={this.state.toggleEvent}/>
                    ))
                }
                </tbody>
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