import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { fadeIn } from '../../helpers/animations';

const LinkInput = styled.input`
  width: 100%;
  min-height: 46px;
  box-sizing: border-box;
  border: 1px solid #d0d0d0;
  background: #fff;
  padding: 11px 14px;
  font-size: 16px;
  word-break: normal;
  outline: none;
  -webkit-appearance: none;
  border-radius: 5px;

  &.error {
    border-color: red;
  }
`;

const TextInput = props => <LinkInput {...props} />;

TextInput.propTypes = {
  small: PropTypes.bool,
  tiny: PropTypes.bool,
};

TextInput.defaultProps = {
  small: false,
  tiny: false,
};

export default TextInput;
