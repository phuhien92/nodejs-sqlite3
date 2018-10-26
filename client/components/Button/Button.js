import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import SVG from 'react-inlinesvg';
import { spin } from '../../helpers/animations';

const StyledButton = styled.button`
  -webkit-appearance: none;
  background-color: #00a2ff;
  color: #fff;
  font-weight: 100;
  border: 1px solid #00a2ff;
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

    ${({ round }) =>
      round &&
      css`
        width: 15px;
        height: 15px;
        margin: 0;
      `};

    ${({ color }) =>
      color === 'gray' &&
      css`
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
  icon: '',
  type: '',
  round: false,
};

export default Button;
