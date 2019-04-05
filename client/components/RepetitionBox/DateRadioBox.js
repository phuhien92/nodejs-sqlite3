import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import './../../../node_modules/react-calendar/dist/Calendar.css';
import './../../../node_modules/react-date-picker/dist/DatePicker.css';

const DatePickerWrapper = styled.div`
    margin-left: 20px;
    display: inline-block;

    .react-date-picker {
        .react-date-picker__wrapper {
            .react-date-picker__inputGroup__input {
                min-width: 2.5em;
                text-align: center;
            }
        }
    }
`;

const DateRadioBox = ({value, endDate, repetition, onChange, onEndDateChange}) => (
    <div>
        <input type="radio" name="repetition" id={value} value={value} checked={repetition === value} onChange={onChange}/>
        <label htmlFor={value}>
            Till Date
            
            <DatePickerWrapper>
                <DatePicker
                    clearIcon={null}
                    disabled={repetition !== value}
                    onChange={onEndDateChange}
                    value={endDate}
                />
            </DatePickerWrapper>
        </label>
    </div>
)

export default DateRadioBox;