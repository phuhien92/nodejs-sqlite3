import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';
import classNames from 'classnames';

const EventTypeWrapper = styled.div`
    background: #fff;
    padding: 20px;
    text-align: center;
    border: 1px dashed #d0d0d0;
    cursor: pointer;
    position: relative;
    flex: 1; 

    &.active {
        background: #1c3d5e;
        color: #fff;

        > .text-muted {
            color: #fff;
        }
    }

    > .text-muted {
        color: #777;
    }
`;

const Title = styled.div

const EventType = ({eventType, type, title, description, selectThisType}) => {

    let classes = classNames({
        'active':eventType === type
    })

    return (
        <EventTypeWrapper className={classes} onClick={selectThisType.bind(this, type)}>
            <span>
                {type === 'OnetoOne' && <FontAwesomeIcon icon='user'/>}
                {type === 'GroupEvent' && <FontAwesomeIcon icon='users'/>}
                <b>{title}</b>
            </span>
            <p className='text-muted'>
                {description}
            </p>
        </EventTypeWrapper>
    )
}

export default EventType