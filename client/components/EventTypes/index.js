import React from 'react'
import styled from 'styled-components';
import EventType from './EventType';

const event_types = [
    {
        type: 'OnetoOne',
        title: 'One To One',
        description: 'Individual, Interview, professionals meetings'
    }, 
    {
        type: "GroupEvent",
        title: "Group Event",
        description: 'Events with more than one people attending together'
    }
]

const EventTypeList = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    flex: 0 0 50%;
`;

class EventTypes extends React.PureComponent {

    selectThisType = (type) => {
        return this.props.setFieldValue("event_type", type);
    }

    render () {
        let {
            value 
        } = this.props;
        let view = event_types.map((event,index) => (
            <EventType 
                key={index}
                eventType={value}
                type={event.type}
                title={event.title}
                description={event.description}
                selectThisType={this.selectThisType}
            />
        ))

        return (
            <EventTypeList>
                {view}
            </EventTypeList>
        )
    }
}

export default EventTypes