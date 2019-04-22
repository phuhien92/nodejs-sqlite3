import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import Button from '../Button';

const AvaiItem = styled.div`
    position: relative;
    margin-bottom: 15px;
    border: 1px solid #d1d1d1!important;
    padding: 15px;
    width: 100%;
    min-height: 160px;
    float: left;
    border-radius: 6px;
    background: #f2f2f2;

    &.active {
        background: #fff;
    }
`;

const Title = styled.p`
    color: #333538;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    margin-top: 0;
    font-weight: bold;
`;

const Text = styled.div`
    margin-top: 10px;
    font-size: 12px;
`;

const StyledSwitcher = styled.div`
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

const dateOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getWeekday = index => (dateOfWeek[index]);

const getTimeRangeStr = (slotType, timeRange) => {
  const txt = timeRange.map((time) => {
    const timeString = slotType === 'recur' ? [time.start, time.end].join(' - ') : time.start;
    return timeString;
  });

  return txt.join(' , ');
};

class AvailabilityItem extends React.Component {

    state = {
        active: false,
        index: 0,
        slot: null,
        open: true
    }

    componentDidMount() {

        let {
            slot, 
            active, 
            index
        } = this.props;

        this.setState({
            slot, active, index
        })
    }

    toggleAvaiSwitcher = () => {
        let {active} = this.state;
        
        this.setState({
            active: !active
        }, () => {

        })
    }

    render () {
        let {slot, active} = this.state;
        let {openModal, index} = this.props;

        const weekdayName = getWeekday(index);
        const slotType  = slot && slot.type ? slot.type : '';
        const timeRange = slot && slot.timeRange ? slot.timeRange.filter(time => time.type === slotType) : [];
        const timeRangeStr = getTimeRangeStr(slotType, timeRange);
        const classes = classnames({'active' : active });

        return (
        <AvaiItem className={classes}>
            <Title>{weekdayName}</Title>
            <Text>{timeRangeStr}</Text>
            <StyledSwitcher className={classes} onClick={this.toggleAvaiSwitcher} data-index={index}>
                <span className="switcher"></span>
                <span>{active ? "ON":"OFF"}</span>
            </StyledSwitcher>
            {active && 
            <ButtonWrapper>
                <Button link onClick={e => openModal(e, index)}>Edit</Button>
            </ButtonWrapper>}
        </AvaiItem>
        )
    }
}

export default AvailabilityItem;