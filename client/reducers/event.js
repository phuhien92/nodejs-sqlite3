import * as types from '../actions/actionTypes';

const initialState = {
    event_name: '15 min meeting',
    event_color: {},
    event_location: 'nha tao',
    event_description: 'nha tao luon',
    event_link: '15_min_meeting',
    event_duration: 15,
    date_range: 60,
}

const event = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default event;