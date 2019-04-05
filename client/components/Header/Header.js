import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import HeaderLeftMenu from './HeaderLeftMenu';
import HeaderRightMenu from './HeaderRightMenu';
import { showPageLoading } from '../../actions';
import classnames from 'classnames';

const Wrapper = styled.header`
    width: 100%;
    padding: 20px 32px;
    background: rgb(3, 155, 229);

    &.js-authenticated {
        margin-bottom: 50px;
    }
`;

const LeftMenuWrapper = styled.div`
    display: flex;

    @media only screen and (max-width: 488px) {
        flex-direction: column;
    }
`;

const Header = props => (
    <Wrapper className={ classnames({'js-authenticated': props.isAuthenticated})}>
      <LeftMenuWrapper>
        <HeaderLeftMenu />
      </LeftMenuWrapper>
      <HeaderRightMenu />
    </Wrapper>
);
  
Header.propTypes = {
    showPageLoading: PropTypes.func.isRequired,
};
  
const mapDispatchToProps = dispatch => ({
    showPageLoading: () => dispatch(showPageLoading()),
});
  
export default connect(null, mapDispatchToProps)(Header);