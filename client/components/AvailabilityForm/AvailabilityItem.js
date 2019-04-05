import React from 'react';
import Button from '../Button';
import styled from 'styled-components';
import classnames from 'classnames';

const AvaiItem = styled.div`
    position: relative;
    margin-bottom: 15px;
    border: 1px solid #d1d1d1!important;
    padding: 15px;
    width: 290px;
    min-height: 160px;
    float: left;
    border-radius: 6px;
    width: 49%;
    background: #f2f2f2;

    &.active {
        background: #fff;
    }

    &:nth-child(odd) {
        margin: 0 2% 2% 0;
    }
`;

const Title = styled.p`
    color: #333538;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    margin-top: 0;
`;

const Text = styled.div`
    margin-top: 10px;
    font-size: 12px;
`;

const AvaiSwitcher = styled.div`
    position: absolute;
    bottom: 15px;
    color: #fff;
    padding: 5px;
    font-weight: 600;
    font-size: 13px;
    border-radius: 5px;
    border: 1px solid #ddd;
    background: #f53b38;
    display: flex;
    align-items: center;
    cursor: pointer;
    &.active {
        background: #43aa8b;
        span {
            order: 1;
        }
        .switcher {
            order: 2;
        }
    }

    .switcher {
        width: 12px;
        height: 12px;
        margin: 3px;
        border-radius: 50%;
        background: #fff;        
    }
`;

const ButtonWrapper = styled.div`
    position: absolute;
    right: 15px;
    bottom: 15px;

    > button {
        padding: 0;
        min-width: auto;
        font-size: 12px;
        font-weight: 700;

    }
`;

const getWeekday = (index) => {
    let d = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ]

    return d[index];
}

const getTimeRangeStr = (slotType, timeRange) => {
    let txt = timeRange.map( time => {
        let timeString = slotType === "recur" ? [time.start,time.end].join(' - '):time.start;
        return timeString;
    });

    return txt.join(' , ');
}

const AvailabilityItem = ({slot, on, index, openModal, toggleAvaiSwitcher}) => {
    let weekdayName = getWeekday(index),
    slotType  = slot.type,
    timeRange = slot.timeRange.filter(time => time.type === slotType),
    timeRangeStr = getTimeRangeStr(slotType, timeRange),
    classes   = classnames({
        "active": on
    });

    return (
        <AvaiItem className={classes}>
            <Title>{weekdayName}</Title>
            <Text>{timeRangeStr}</Text>
            <AvaiSwitcher className={classes} onClick={toggleAvaiSwitcher} data-index={index}>
                <span className="switcher"></span>
                <span>{on ? "ON":"OFF"}</span>
            </AvaiSwitcher>
            {on && <ButtonWrapper>
                <Button link onClick={openModal}>Edit</Button>
            </ButtonWrapper>}
        </AvaiItem>
    )
}

export default AvailabilityItem;