import * as types from '../actions/actionTypes';

const initialState = {
    isAuthenticated: false,
    user: '',
    renew: false 
}

const auth = (state = initialState, action) => {
    switch(action.type) {
        case types.AUTH_USER: 
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };

        case types.AUTH_RENEW:
            return { ...state, renew: true };
        
        case types.UNAUTH_USER:
            return initialState;

        default:
            return state;
    }
}

export default auth;