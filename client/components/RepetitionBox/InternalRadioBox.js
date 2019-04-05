import React from 'react';
import styled from 'styled-components';
import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle';
import './../../../node_modules/react-calendar/dist/Calendar.css';
import './../../../node_modules/@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';

const DateRangeWrapper = styled.div`
    margin-left: 20px;
    display: inline-block;
    .react-daterange-picker__wrapper {
        .react-daterange-picker__inputGroup__input {
            min-width: 2.5em;
            text-align: center;
        }
    }
`;

const IntervalRadioBox = ({value, dateRange,repetition, onChange, setDateRange}) => {
    let checked = repetition === value;
    return (
        <div>
            <input type="radio" name="repetition" id={value} value={value} checked={checked} onChange={onChange}/>
            <label htmlFor={value}>
                Between 
                
                <DateRangeWrapper>
                    <DateRangePicker
                        clearIcon={null}
                        disabled={!checked}
                        onChange={setDateRange}
                        value={dateRange}
                    />
                </DateRangeWrapper>
            </label>
        </div>
    )
}

export default IntervalRadioBox;