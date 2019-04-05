import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import LoginBox from './LoginBox';
import LoginInputLabel from './LoginInputLabel';
import TextInput from '../TextInput';
import Button from '../Button';
import Error from '../Error';
import { loginUser, signupUser } from '../../actions';
import { withFormik } from 'formik';
import Yup from 'yup';
import Router from 'next/router';
import { showPageLoading, hidePageLoading } from './../../actions';

const Wrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & > * {
    flex: 1 1 0;
  }
`;

const FormGroup = styled.div`
  position: relative;
  margin-bottom: 30px;
`

class LoginInnerForm extends Component {

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

  componentWillUnmount() {

  }

  render() {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit
    } = this.props;

    return  (
      <Wrapper>
        <LoginBox id="login-form" onSubmit={handleSubmit}>
          <FormGroup>
            <LoginInputLabel htmlFor="email">
              Email address
            </LoginInputLabel>
            <TextInput 
              type="email" 
              name="email" 
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? 'error':''} 
            />
            {
              touched.email && errors.email &&
              <Error error={errors.email}></Error>
            }
          </FormGroup>
          
          <FormGroup>
            <LoginInputLabel htmlFor="password">Password</LoginInputLabel>
            <TextInput 
              type="password" 
              name="password" 
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password && touched.password ? 'error':''}
            />
            {
              touched.password && errors.password &&
              <Error error={errors.password}></Error>
            }
          </FormGroup>
          
          {
            errors.server &&
            <Error error={errors.server}></Error>
          }
          <ButtonWrapper>
            <Button
                type="submit"
                icon={isSubmitting ? 'loader' : 'login'}
                color={isSubmitting ? 'gray' : 'blue'}
                disabled={isSubmitting}
            >
                Login
            </Button>
          </ButtonWrapper>
            
        </LoginBox>
      </Wrapper>
    )
  }
}

const LoginForm = withFormik({
  mapPropsToValues: () => ({email: '', password:''}),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Require at least 6 characters.')
      .max(30, 'Maximum password length is 30.')
      .required('Password is required')
  }),
  handleSubmit: (values, {props, setSubmitting, setErrors}) => {

    setSubmitting(true);

    props.login(values)
      .then(() => {
        showPageLoading();
        Router.push('/events');
      })
      .catch(error => {
        setErrors({server: error.message});
      })
      .finally(() => {
        setSubmitting(false);
      })
  },
  displayName: 'LoginForm'
})(LoginInnerForm)

LoginInnerForm.propTypes = {
    signup: PropTypes.func.isRequired,
    showPageLoading: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth, loading }) => ({ auth, loading });
  
const mapDispatchToProps = dispatch => ({
    login: (credentials) => dispatch(loginUser(credentials)),
    signup: (credentials) => dispatch(signupUser(credentials)),
    showPageLoading: () => dispatch(showPageLoading()),
    hidePageLoading: () => dispatch(hidePageLoading())
});
  
const Login = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default Login;