import React, {Component} from 'react'
import styled, {css} from 'styled-components';
import Router from 'next/router';
import PublicSwitch from './PublishSwitch';
import EventDropdown from './EventDropdown';
import Link from '../Link';
import Button from '../Button';

const StyledRow = styled.tr`
    
`;

const StyledCol = styled.td`
    text-align: center;
`;

const EventName = styled.span`
    color: #4D5055;
    word-wrap: break-word;
    word-break: break-word;
    max-width: 80%;
    line-height: 16px;
    font-size: 14px;
`;

const Marker = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    background: #d9d9d9;
    border-radius: 50%;
    border: 1px solid #bbb;

    ${({ color }) =>
    color &&
    css`
      background: ${color};
    `}
`;

class Event extends Component {

    componentDidMount () {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount () {
        document.addEventListener('click', this.handleClickOutside)
    }
    
    handleClickOutside = (e) => {
        if (this.dropdownRef && !this.dropdownRef.contains(e.target)) {
            this.props.toggleDropdown('');
        }   
    }

    go = (e) => {
        let target = e.target;

        if (
            !this.switchRef.contains(target) &&
            !this.dropdownRef.contains(target)
        ) {
            Router.push(`/events/edit/${this.props.id}`);
        }
    }

    toggleDropdown = () => {
        this.props.toggleDropdown(this.props.id)
    };

    render () {
        let {
            event_color,
            event_name,
            id,
            published,
            event_duration_hours,
            event_duration_minutes
        } = this.props,
        toggled = this.props.toggleEvent === id;

        return (
            <StyledRow>
                <StyledCol>
                    { published ? <Marker color={event_color.value}/> : <Marker/>}
                    <EventName>{event_name}</EventName>
                </StyledCol>
                <StyledCol></StyledCol>
                <StyledCol>
                    {event_duration_hours > 0 ? `${event_duration_hours} hr `:null}
                    {event_duration_minutes > 0 ? `${event_duration_minutes} min`:null}
                </StyledCol>
                <StyledCol>
                    <Link path={`/events/${id}/edit`}>
                        <Button 
                            link
                            size={'small'}
                        >Edit Event</Button>
                    </Link>    
                </StyledCol>
            </StyledRow>
        )
    }
}

export default Event