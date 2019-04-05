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
`;

const Error = ({ error, bottom, left, type, classes }) => {
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
  bottom: 0,
  left: 0,
  classes: '',
  type: 'alert-primary'
};

export default Error;
