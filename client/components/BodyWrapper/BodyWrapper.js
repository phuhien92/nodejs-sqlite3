
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { auth } from './../../firebase';
import styled from 'styled-components';
import PageLoading from './../PageLoading';
import Header from '../Header';
import { hidePageLoading } from '../../actions';
import * as types from './../../actions/actionTypes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faCalendar,
    faCheck,
    faCog,
    faAngleDown,
    faPen,
    faTrash
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faCalendar,
    faCheck,
    faCog,
    faAngleDown,
    faPen,
    faTrash
);

const Wrapper = styled.div`
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    * {
        box-sizing: border-box;
    }

    *::-moz-focus-inner {
        border: none;
    }

    @media only screen and (max-width: 448px) {
        font-size: 14px;
    }
`;

const ContentWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
`;

class BodyWrapper extends React.Component {
    componentDidMount () {
        
        auth.onAuthStateChanged( ( currentUser ) => {
            
            if (currentUser) {
                this.props.authUser({
                    uid : currentUser.uid,
                    photoURL: currentUser.photoURL,
                    email: currentUser.email,
                    refreshToken: currentUser.refreshToken             
                })
            }
            this.props.hidePageLoading();
        });
        
    }
    
    render() {
        const { children, pageLoading } = this.props;
        const content = pageLoading ? <PageLoading/> : children;

        return (
            <Wrapper>
                <ContentWrapper>
                    <Header/>
                    {content}
                </ContentWrapper>
            </Wrapper>
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

const mapStateToProps = ({loading: { page: pageLoading}}) => ({
    pageLoading
});


const mapDispatchToProps = dispatch => ({
    hidePageLoading: () => dispatch(hidePageLoading()),
    authUser: (payload) => dispatch({type: types.AUTH_USER, payload: payload})
})

export default connect(mapStateToProps, mapDispatchToProps)(BodyWrapper);
