import * as types from '../actions/actionTypes';

const initialState = {
    step: 1
}

const edit_event = (state = initialState, action) => {
    switch(action.type) {
        case types.TOGGLE_EDIT_EVENT_TAB: {
            return {
                ...state,
                step: action.payload
            }
        }

        default:
            return state;
    }
}

export default edit_event;