import React, { Component } from 'react'
import styled, {css} from 'styled-components';
import DurationPicker from './DurationPicker';

const List = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
`;

const duration = [15,30,45,60];

const EventDurationList = ({onChange, event_duration_box_index, setCustomEventDuration}) => {
    let view = duration.map( (time, index) => (
        <DurationPicker
            event_duration_box_index={event_duration_box_index} 
            key={index}
            index={index}
            time={time}
            selectThisTime={onChange}
        />
    ))

    return (
        <List>
            {view}
                <DurationPicker
                    event_duration_box_index={event_duration_box_index} 
                    time={0}
                    index={999}
                    selectThisTime={onChange}
                    timeUnit='custom min'
                    setCustomEventDuration={setCustomEventDuration}
            />
        </List>
    )
}

export default EventDurationList