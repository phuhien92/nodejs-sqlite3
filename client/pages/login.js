import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Router from 'next/router';
import BodyWrapper from '../components/BodyWrapper';
import Login from '../components/Login';

class LoginPage extends PureComponent {
  static getInitialProps(props) {
    console.log(props);
    
  } 

  componentDidMount() {
    if (this.props.isAuthenticated) {
      Router.push('/');
    }
  }

  render() {
    return (
      !this.props.isAuthenticated && (
        <BodyWrapper>
          <Login />
        </BodyWrapper>
      )
    );
  }
}

LoginPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = ({auth: {isAuthenticated}}) => ({
  isAuthenticated 
});

export default connect(mapStateToProps, null)(LoginPage);
