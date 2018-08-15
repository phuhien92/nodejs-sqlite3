import * as types from './../actions/actionTypes';

const initialState = {
    api: false,
    domain: false,
    login: false,
    signup: false
}

const loading = (state = initialState, action) => {
    switch(action.type) {
        case types.SHOW_PAGE_LOADING: 
            return {...state, page: true}
        case types.HIDE_PAGE_LOADING: 
            return {
                ...state,
                page:false,
                signup:false,
                login:false 
            }
        default:
            return state;
    }
}

export default loading;