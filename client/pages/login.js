import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Router from './../../server/routes';
import BodyWrapper from '../components/BodyWrapper';
import Login from '../components/Login';

class LoginPage extends PureComponent {
  componentDidMount() {
    // if (this.props.isAuthenticated) {
    //   Router.push('/');
    // }
  }

  render() {
    return (
      <BodyWrapper>
        <Login />
      </BodyWrapper>
    );
  }
}

export default connect(null, null)(LoginPage);
