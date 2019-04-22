import React from 'react';
import styled, { css } from 'styled-components';

const Switch = styled.label`
    position: relative;
    display: inline-block;
`;

const Slider = styled.div`
    width: 25px;
    height: 11px;
    position: relative;
    top: 1px;
    cursor: pointer;
    border: 1px solid #d0d0d0;
    border-radius: 5px;
    background-color: #eeee;
    transition: all .2s ease-in-out;
    display: flex;

    ${({ size }) => size === 'large' && css`
        justify-content: space-between;
        width: 90px;
        height: 28px;
        font-size: 12px;
        padding: 5px;
        color: #000;
        font-weight: 700;
        display: flex;
        > span {
            order: 1;
        }
        > small {
            height: 16px;
            width: 16px;
            background: #fff;
            border: 2px solid #000;
            border-radius: 50%;
            order: 2;
        }
    `};

    &.checked {
        ${({ size }) => size === 'large' && css`
            color: #fff;
            background: #407f33;
            > span {
                order: 2;
            }
            > small {
                border: 2px solid #407f33;
                order: 1;
            }
        `};
    }
`;

const EventPublishSwitch = ({ size, setFieldValue, published }) => {
  let currentState = published;

  const setValue = () => {
    currentState = !currentState;
    // return;
    setFieldValue('published', currentState);
  };

  return (
      <Switch>
        <Slider size={size} onClick={setValue} className={currentState ? 'checked' : ''}>
            <span>{currentState && 'PUBLIC'}</span>
            <span>{!currentState && 'PRIVATE'}</span>
            <small />
          </Slider>
      </Switch>
  );
};

export default EventPublishSwitch;
