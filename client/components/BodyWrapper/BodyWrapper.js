
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { auth } from './../../firebase';
import styled from 'styled-components';
import PageLoading from '../PageLoading';
import { hidePageLoading, showPageLoading } from '../../actions';
import * as types from './../../actions/actionTypes';
import classnames from 'classnames';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faTachometerAlt, 
    faCalendar,
    faCheck,
    faCog,
    faAngleDown,
    faPen,
    faTrash,
    faUser,
    faUsers
} from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../Sidebar';
import NavTop from '../Navigation/NavTop';
import Header from '../Header';

library.add(
    faTachometerAlt,
    faCalendar,
    faCheck,
    faCog,
    faAngleDown,
    faPen,
    faTrash,
    faUser,
    faUsers
);

const ContentWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    height: 100%;
    max-height: 100vh;
    * {
        box-sizing: border-box;
    }

    &.auth-view {
        overflow: hidden;
    }
`;

const MainContentWrapper = styled.div`
    overflow-x: hidden;
    display: flex;
    flex: 1;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    &.layout-column {
        
        
    }
`;

const ContentInnerWrapper = styled.div`
    overflow: auto;
    display: flex;
    flex: 0 0 auto;
`;

class BodyWrapper extends React.Component {
    componentDidMount () {
        let {
            hidePageLoading
        } = this.props;
        
        auth.onAuthStateChanged( ( currentUser ) => {
            if (currentUser) {
                this.props.authUser({
                    uid : currentUser.uid,
                    photoURL: currentUser.photoURL,
                    email: currentUser.email,
                    refreshToken: currentUser.refreshToken             
                })
            }
            hidePageLoading();
        });
        
    }
    
    render() {
        const { 
            children, 
            isAuthenticated, 
            template,
            pageLoading
        } = this.props;

        const content = pageLoading ? <PageLoading/> : children;

        const classes = classnames({
            'auth-view': isAuthenticated
        });

        return (
            <ContentWrapper className={classes}>
                {template === 'admin' && <Sidebar {...this.props}/>}
                <MainContentWrapper className={isAuthenticated ? "layout-column":""}>
                    {!pageLoading && <Header {...this.props}/>}
                    <ContentInnerWrapper>
                        {content}
                    </ContentInnerWrapper>
                </MainContentWrapper>
            </ContentWrapper>
        )
    }
}

BodyWrapper.propTypes = {
    children: PropTypes.node,
    hidePageLoading: PropTypes.func.isRequired,
    pageLoading: PropTypes.bool.isRequired,
    norenew: PropTypes.bool
}

BodyWrapper.defaultProps = {
    norenew: false 
}

const mapStateToProps = ({
    loading: { page: pageLoading } , 
    auth: { isAuthenticated }
}) => ({
    pageLoading,
    isAuthenticated
});


const mapDispatchToProps = dispatch => {
    return {
        authUser: (payload) => dispatch({type: types.AUTH_USER, payload: payload}),
        hidePageLoading: () => dispatch(hidePageLoading()),
        showPageLoading: () => dispatch(showPageLoading())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyWrapper);
