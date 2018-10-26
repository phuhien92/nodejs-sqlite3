import React, { Component } from 'react'
import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Circle = styled.li`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 40px;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;

    ${({ color }) =>
      color &&
      css`
        background: ${color};
      `};
`;

const EventColor = ({color, selectedColor, selectThisColor}) => {

    let selected = color.label === selectedColor.label;

    return (
        <Circle color={color.value} onClick={selectThisColor.bind(this, color)}>
            {selected && <FontAwesomeIcon icon="check" className='fa-lg fa-inverse'/>}
        </Circle>
    )
}

export default EventColor