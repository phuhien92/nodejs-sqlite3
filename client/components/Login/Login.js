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
            <LoginInputLabel htmlFor="email" test="test">
              Email address
            </LoginInputLabel>
            <TextInput 
              type="email" 
              name="email" 
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? 'text-input error':'text-input'} 
              autoFocus 
            />
            {errors.email &&
            touched.email && <Error error={errors} type='email'/>
            }
          </FormGroup>
          
          <FormGroup>
            <LoginInputLabel htmlFor="password">Password (min chars: 6)</LoginInputLabel>
            <TextInput 
              type="password" 
              name="password" 
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? 'text-input error':'text-input'}
            />
            {errors.password &&
            touched.password && <Error error={errors} type={'password'}></Error>
            }
          </FormGroup>
          
          <FormGroup>
            {errors.server && <Error error={errors} type={'server'}></Error>}
          </FormGroup>
          <ButtonWrapper>
            <Button
                type="submit"
                icon={this.props.loading.login ? 'loader' : 'login'}
                disabled={isSubmitting}
            >
                Login
            </Button>
            {/* <Button
                icon={this.props.loading.login ? 'loader' : 'login'}
                onClick={this.loginHandler}
                disabled={isSubmitting}
            >
                Login
            </Button>
            <Button
                icon={this.props.loading.signup ? 'loader' : 'signup'}
                color="purple"
                onClick={this.signupHandler}
                disabled={isSubmitting}
            >
                Sign up
            </Button> */}
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
    props.login(values)
      .catch(error => {
        console.log("Components/Login/Login.js : ",error)
        setErrors({server: error.message});
      })
    setTimeout(() => {
      setSubmitting(false);
    },1000)
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
});
  
const Login = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default Login;