import React from 'react';
import styled, {css} from 'styled-components';
import classNames from 'classnames';

const Picker = styled.li`
    width: 100px;
    cursor: pointer;
    padding: 10px;
    border: solid #666a73 2px;
    font-weight: bold;
    text-align: center;
    margin-right: 3px;

    &.custom {
        margin-left: 10px;
        box-shadow: none;
    }

    &.selected {
        border: solid #00a2ff 2px;
    }

    .desc {
        color: #a8a8a8;
        font-size: 12px;
        font-weight: normal;
    }
`;

const PickerInput = styled.input`
    border: none;
    width: 80px;
    text-align: inherit;
    font-size: inherit;
    line-height: inherit;
    min-height: 0;
    max-height: 20px;
    padding: 0px;
    vertical-align: bottom;
    background: none;
    margin-bottom: 5px !important;
    outline: none;
`;

const DurationPicker = ({ event_duration_box_index,selectThisTime, setCustomEventDuration, time, timeUnit, index }) => {
    let pickerInputRef = React.createRef();

    let classes = classNames({
        'custom': timeUnit,
        'selected': event_duration_box_index === index
    })

    if (event_duration_box_index === 999) {
        
    }

    return (
        <Picker className={classes} data-value={time} data-index={index} onClick={selectThisTime}>
              {timeUnit ?  (
                  <PickerInput 
                    name='custom_duration'
                    type='number'
                    tabindex='-1'
                    placeholder='___'
                    min={0}
                    onChange={setCustomEventDuration} 
                    ref={pickerInputRef}
                    />
              ) : (
                  <span>{time}</span>
              )}
              <div className='desc'>{timeUnit ? timeUnit : 'min'}</div>        
        </Picker>
    )
}

export default DurationPicker;