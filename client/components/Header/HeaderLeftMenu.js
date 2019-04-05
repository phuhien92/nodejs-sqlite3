import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Router from 'next/router';
import { showPageLoading } from '../../actions';

const List = styled.ul`
  display: flex;
  align-items: flex-end;
  list-style: none;
  margin: 0 0 3px;
  padding: 0;

  @media only screen and (max-width: 488px) {
    display: none;
  }
`;

const HeaderLeftMenu = props => {
  const goTo = e => {
    e.preventDefault();
    const path = e.currentTarget.getAttribute('href');
    if (!path || window.location.pathname === path) return;
    //props.showPageLoading();
    Router.push(path);
  };


  return (
    <List>
      
    </List>
  );
};

HeaderLeftMenu.propTypes = {
  showPageLoading: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired
  }).isRequired
};

const mapStateToProps = ({ auth }) => ({
  auth
})

const mapDispatchToProps = dispatch => ({
  showPageLoading: bindActionCreators(showPageLoading, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLeftMenu);
