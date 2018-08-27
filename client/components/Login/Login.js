import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { connect } from 'react-redux';
import styled from 'styled-components';
import LoginBox from './LoginBox';
import LoginInputLabel from './LoginInputLabel';
import TextInput from '../TextInput';
import Button from '../Button';
import { loginUser, signupUser } from '../../actions';

const Wrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  margin: 24px 0 64px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & > * {
    flex: 1 1 0;
  }
  & > *:last-child {
    margin-left: 32px;
  }
  @media only screen and (max-width: 768px) {
    & > *:last-child {
      margin-left: 16px;
    }
  }
`;

const VerificationMsg = styled.p`
  font-size: 24px;
  font-weight: 300;
`;

const User = styled.span`
  font-weight: normal;
  color: #512da8;
  border-bottom: 1px dotted #999;
`;

const ForgetPassLink = styled.a`
  align-self: flex-start;
  margin: -24px 0 32px;
  font-size: 14px;
  text-decoration: none;
  color: #2196f3;
  border-bottom: 1px dotted transparent;

  :hover {
    border-bottom-color: #2196f3;
  }
`;

class Login extends Component {

  authHandler = (type) => {
    const {loading} = this.props;
    if (loading.login || loading.signup) return null;

    const form = document.getElementById('login-form');
    const { value: email } = form.elements.email;
    const { value: password } = form.elements.password;

    return type === 'login' ?
      this.props.login({email, password}) :
      this.props.signup({email, password});
  }

  signupHandler = (e) => {
    e.preventDefault();
    this.authHandler('signup')
  }

  loginHandler = (e) => {
    e.preventDefault();
    this.authHandler('login')
  }

  render() {
    return  (
      <Wrapper>
        <LoginBox id="login-form" onSubmit={this.loginHandler}>
            <LoginInputLabel htmlFor="email" test="test">
              Email address
            </LoginInputLabel>
            <TextInput type="email" name="email" id="email" autoFocus />
            <LoginInputLabel htmlFor="password">Password (min chars: 6)</LoginInputLabel>
            <TextInput type="password" name="password" id="password" />
              
            <ButtonWrapper>
              <Button
                  icon={this.props.loading.login ? 'loader' : 'login'}
                  onClick={this.loginHandler}
                  big
              >
                  Login
              </Button>
              <Button
                  icon={this.props.loading.signup ? 'loader' : 'signup'}
                  color="purple"
                  onClick={this.signupHandler}
                  big
              >
                  Sign up
              </Button>
            </ButtonWrapper>
        </LoginBox>
      </Wrapper>
    )
  }
}

Login.propTypes = {
    signup: PropTypes.func.isRequired,
    showPageLoading: PropTypes.func.isRequired,
};
  
const mapStateToProps = ({ auth, loading }) => ({ auth, loading });
  
const mapDispatchToProps = dispatch => ({
    login: (credentials) => dispatch(loginUser(credentials)),
    signup: (credentials) => dispatch(signupUser(credentials)),
    showPageLoading: () => dispatch(showPageLoading()),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);