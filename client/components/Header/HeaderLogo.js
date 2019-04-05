import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import styled from 'styled-components';

const LogoImage = styled.div`
  display: inline-block;

  img {
    width: 18px;
    margin-right: 11px;
  }
`;

const HeaderLogo = props => {
  const goTo = e => {
    e.preventDefault();
    const path = e.target.getAttribute('href');
    if (window.location.pathname === path) return;
    Router.push(path);
  };

  return (
      <a href="/">
        <span>
          <img src="/images/logo.svg" alt="" />
        </span>
      </a>
  );
};

HeaderLogo.propTypes = {
  //showPageLoading: PropTypes.func.isRequired,
};

export default HeaderLogo;
