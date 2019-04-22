import * as types from '../actions/actionTypes';

const initialState = {
    modalType: null,
    modalBackdrop: true,
    modalProps: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_MODAL: 
            return {
                modalProps: action.modalProps,
                modalType: action.modalType,
                modalBackdrop: action.modalBackdrop || state.modalBackdrop,
                type: action.type
            }

        case types.HIDE_MODAL: 
            return initialState;

        default:
            return state;
    }
}