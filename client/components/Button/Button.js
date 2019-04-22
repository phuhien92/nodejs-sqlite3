import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import SVG from 'react-inlinesvg';
import { spin } from '../../helpers/animations';

const StyledButton = styled.button`
  color: #000;
  font-weight: 300;
  text-align: center;
  text-decoration: none;
  line-height: 20px;
  cursor: pointer;
  outline: none;
  padding: 12px 12px 11px;
  border-radius: 0;
  display: inline-block;
  user-select: none;
  box-sizing: border-box;
  font-size: 16px;
  min-width: 80px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;

  :disabled {
    opacity: 0.5;
  }

  ${({ color }) => {
    if (color === 'blue') {
      return css`
        background-color: #00a2ff;
        border: 1px solid #00a2ff;
        color: #fff;
        :hover {
          background-color: #005596;
          border: 1px solid #005596;
        }
      `;
    }

    if (color === 'purple') {
      return css`
        background: linear-gradient(to right, #7e57c2, #6200ea);
        box-shadow: 0 5px 6px rgba(81, 45, 168, 0.5);
        :focus,
        :hover {
          box-shadow: 0 6px 15px rgba(81, 45, 168, 0.5);
        }
      `;
    }
    if (color === 'gray') {
      return css`
        color: black;
        background: linear-gradient(to right, #e0e0e0, #bdbdbd);
        box-shadow: 0 5px 6px rgba(160, 160, 160, 0.5);
        border-color: #ccc;
        :focus,
        :hover {
          box-shadow: 0 6px 15px rgba(160, 160, 160, 0.5);
        }
      `;
    }
    return null;
  }};

  ${({ link }) =>
  link &&
  css`
    color: #000;
    background: none;
    border: none;
    :hover {
      background: none;
      border: none;
    }
  `};

  ${({ size }) => size === 'large' && css`
    padding: 14px 20px;
    font-size: 18px;
    min-width: 180px;
  `}

  ${({ size }) => size === 'small' && css`
    padding: 5px 10px;
    font-size: 12px;
  `}
`;

const Icon = styled(SVG)`
  svg {
    width: 16px;
    height: 16px;
    margin-right: 12px;
    stroke: #fff;

    ${({ type }) =>
      type === 'loader' &&
      css`
        width: 20px;
        height: 20px;
        margin: 0;
        animation: ${spin} 1s linear infinite;
      `};

    ${({ round }) => round && css`
        width: 15px;
        height: 15px;
        margin: 0;
      `};

    ${({ color }) => color === 'gray' && css`
        stroke: #444;
      `};

    @media only screen and (max-width: 768px) {
      width: 12px;
      height: 12px;
      margin-right: 6px;
    }
  }
`;

const Button = props => {
  const SVGIcon = props.icon ? (
    <Icon
      type={props.icon}
      round={props.round}
      color={props.color}
      src={`/images/${props.icon}.svg`}
    />
  ) : (
    ''
  );
  return (
    <StyledButton {...props}>
      {SVGIcon}
      {props.icon !== 'loader' && props.children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  icon: PropTypes.string,
  round: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  color: 'blue',
  icon: '',
  type: '',
  round: false,
};

export default Button;
