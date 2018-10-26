import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { fadeIn } from '../../helpers/animations';

const ErrorMessage = styled.p`
  content: '';
  display: block;
  font-size: 14px;
  color: red;
  animation: ${fadeIn} 0.3s ease-out;

  @media only screen and (max-width: 768px) {
    right: 8px;
    bottom: -40px;
    font-size: 12px;
  }

  ${({ left }) =>
    left > -1 &&
    css`
      right: auto;
      left: ${left}px;
    `};

  ${({ bottom }) =>
    bottom &&
    css`
      bottom: ${bottom}px;
    `};
`;

const Error = ({ bottom, error, left, type, classes }) => {
  const message = error && (
    <ErrorMessage left={left} bottom={bottom}>
      {error}
    </ErrorMessage>
  );
  return <div className={classes}>{message}</div>;
};

Error.propTypes = {
  bottom: PropTypes.number,
  type: PropTypes.string.isRequired,
  left: PropTypes.number,
  classes: PropTypes.string
};

Error.defaultProps = {
  bottom: -64,
  left: -1,
  classes: ''
};

export default Error;
