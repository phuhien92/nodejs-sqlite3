import React from 'react';
import styled from 'styled-components';

const NeverEndRadioBox = ({value, repetition, onChange}) => (
    <div>
        <input type="radio" name="repetition" id={value} value={value} checked={repetition === value} onChange={onChange}/>
        <label htmlFor={value}>
            Repetition never ends
        </label>
    </div>
)

export default NeverEndRadioBox;