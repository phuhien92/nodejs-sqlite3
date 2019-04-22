import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Router from 'next/router';
import styled from 'styled-components';
import HeaderMenuItem from './HeaderMenuItem';
import { showPageLoading, logoutUser, unauthUser } from '../../actions';
import Button from '../Button';
import Link from '../Link';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const List = styled.ul`
  display: flex;
  float: right;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  @media only screen and (max-width: 488px) {
    justify-content: space-evenly;
    width: 100%;
  }
`;

// const IMAGE = styled.img`
//   border-radius: 3px;
//   width: 60px;
//   box-shadow: 0 5px 6px #7c7e79;
// `;

const LoginContainer = styled.div`
  display: inline-block;

  @media only screen and (max-width: 488px) {
    display: none;
  }
`;

const ItemTitle = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  border: 2px solid transparent;
  transition: all 0.1s linear;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;

const HeaderMenu = (props) => {
  const goTo = (e) => {
    e.preventDefault();
    const path = e.currentTarget.getAttribute('href');
    if (!path || window.location.pathname === path) return;
    props.showPageLoading();
    Router.push(path);
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    props.logout()
    .then( () => {
      props.unAuthUser();
      Router.push('/login');
    })
    .catch((error) => {
      console.error("Header Right Menu :", error);
    });
  };

  const login = !props.auth.isAuthenticated && (
    <HeaderMenuItem>
      <a href="/login" title="login / sign up" onClick={goTo}>
        <Button>Login / Sign up</Button>
      </a>
    </HeaderMenuItem>
  );

  const account = props.auth.isAuthenticated && (
    <HeaderMenuItem >
      <a href="/account" title="account" onClick={goTo}>
        <ItemTitle>Account</ItemTitle>
      </a>
    </HeaderMenuItem>
  )

  const event_types = props.auth.isAuthenticated && (
    <HeaderMenuItem>
      <Link path="/events">
        <ItemTitle>Event Types</ItemTitle>
      </Link>
    </HeaderMenuItem>
  )

  const logout = props.auth.isAuthenticated && (
    <LoginContainer>
      <HeaderMenuItem>
        <a href="/logout" title="logout" onClick={logoutHandler}>
          <ItemTitle>Logout</ItemTitle>
        </a>
      </HeaderMenuItem>
    </LoginContainer>
  );

  return (
    <List>
      {event_types}
      {account}
      {logout}
      {login}
    </List>
  );
};

HeaderMenu.propTypes = {
  showPageLoading: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = dispatch => ({
  showPageLoading: () => dispatch(showPageLoading()),
  logout: () => dispatch(logoutUser()),
  unAuthUser: () => dispatch(unauthUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
