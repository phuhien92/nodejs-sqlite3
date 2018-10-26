import * as types from '../actions/actionTypes';

const initialState = {
    events: [],
    totalEvents: 0
}

const events = (state = initialState, action) => {

    switch(action.type) {
        case types.PUBLISH_EVENT_SUCCESS: 
            let events = [...state.events],
            newEvents  = events.map(event => {
                return (event.id === action.payload.id) ?
                    {
                        ...event,
                        published: !action.payload.published
                    } : event
            })
            
            return {
                ...state,
                events: newEvents
            }

        case types.EVENTS_FETCH_SUCCESS: 
            let totalEvents = action.payload.length;

            return {
                ...state,
                events: action.payload,
                totalEvents: totalEvents            
            }
        
        default:
            return state;
    }
}

export default events;