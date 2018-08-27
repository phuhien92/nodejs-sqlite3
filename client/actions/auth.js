import Router from 'next/router';
import axios from 'axios';
import cookie from 'js-cookie';
import * as types from './actionTypes';
import { auth } from '../firebase';

export const showPageLoading = () => ({ type: types.SHOW_PAGE_LOADING });
export const hidePageLoading = () => ({ type: types.HIDE_PAGE_LOADING });
export const authUser = payload => ({ type: types.AUTH_USER, payload});
export const unauthUser = () => ({type: types.UNAUTH_USER});
export const authRenew  = () => ({type: types.AUTH_RENEW});

export const signupUser = (payload) => async dispatch => {
    //dispatch(showSignupLoading());
    try {
        const {data: {email, message}, status} = await axios.post('/api/auth/signup', payload);
        
        if (status === 200) {
            loginUser(payload)
        }

    } catch (error) {
        console.log(error)
    }
}

export const loginUser = ({email, password}) => async dispatch => {
    //dispatch(showLoginLoading());

    // As httpOnly cookies are to be used. do not persist any state client side

    auth.signInWithEmailAndPassword(email, password)
    .then( user => {
        // get the user's ID token a it is needed to exchange for a session cookie
        console.log(auth)
        // return auth.User.getIdToken()
        // .then(idToken => {
        //     console.log("idToken: ", idToken);
        //     // dispatch(authUser({
        //     //     email, photoURL, uid, refreshToken, idToken
        //     // }));

        //     const csrfToken = cookie.get('csrfToken');
        //     return postIdTokenToSessionLogin('/api/auth/sessionLogin', idToken, csrfToken);
        // })
        // .then(() => {
        //     // a page redirect would suffice as the persistence is set to NONE
        //     return logoutUser()
        // })
        // .then(() => {
        //     Router.push('/');
        // })
        // .catch(error => {
        //     console.log("actions/auth/loginUser: idToken :", error);
        // })
        Router.push('/');
        dispatch(showPageLoading());
    })
    .catch(error => {
        let errorCode = error.code;
        let errorMsg  = error.message;

        console.log("/action/auth/loginUser:", error);
    })
}

export const logoutUser = () => async (dispatch, getState) => auth.signOut();
export const postIdTokenToSessionLogin = (url, idToken, csrfToken) => async dispatch => {
    const resp = await axios.post(url, {idToken, csrfToken});
}