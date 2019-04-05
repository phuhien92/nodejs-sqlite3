import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fadeIn } from '../../helpers/animations';

const Box = styled.form`
  position: relative;
  width: 500px;
  max-width: 100%;
  justify-content: space-between;
  animation: ${fadeIn} 0.8s ease-out;
  padding: 30px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0px 10px 20px #ccc;
`;

const LoginBox = ({ children, ...props }) => <Box {...props}>{children}</Box>;

LoginBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginBox;
