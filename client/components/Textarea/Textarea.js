import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { fadeIn } from '../../helpers/animations';

const TextBox = styled.textarea`
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
  border-radius: 0;
  display: block;
  resize: vertical;
  margin-bottom: 5px;
  min-height: 150px;
`;

const Textarea = props => <TextBox {...props} />;

// TextInput.propTypes = {
//   small: PropTypes.bool,
//   tiny: PropTypes.bool,
// };

// Textarea.defaultProps = {
//   small: false,
//   tiny: false,
// };

export default Textarea;