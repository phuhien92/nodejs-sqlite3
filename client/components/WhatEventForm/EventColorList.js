import React, { Component } from 'react'
import EventColor from './EventColor';
import styled from 'styled-components';

const ColorList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
`;

const colors = [
    { value: '#FF3C38', label: 'RED'},
    { value: '#2B193D', label: 'PURPLE'},
    { value: '#43AA8B', label: 'GREEN'},
    { value: '#124E78', label: 'BLUE'},
    { value: '#FF9F1C', label: 'ORANGE'}
]

class EventColorList extends Component {
    
    selectThisColor = (selectedColor) => {
        this.props.onChange('event_color',selectedColor);
    }

    render () { 

        let selectedColor = this.props.selectedColor || colors[0],
        view = colors.map( (color,index) => (
            <EventColor 
                key={index} 
                color={color} 
                selectedColor={selectedColor}
                selectThisColor={this.selectThisColor}
            ></EventColor>
        ))

        return (
            <ColorList>
                {view}
            </ColorList>
        )
    }
}

export default EventColorList