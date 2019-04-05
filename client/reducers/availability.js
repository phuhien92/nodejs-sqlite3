import * as types from '../actions/actionTypes';

const initialState = {
    uid: null,
    eventId: null,
    slots: [
        {
            on: false,
            type: "recur",
            timeRange: [
                {
                    type: "recur",
                    start: "09:00 AM",
                    end: "5:00 PM"
                },
                {
                    type: "single",
                    start: "09:00 AM",
                }
            ]
        },
        {
            on: true,
            type: "recur",
            timeRange: [
                {
                    type: "recur",
                    start: "09:00 AM",
                    end: "5:00 PM"
                },
                {
                    type: "single",
                    start: "09:00 AM",
                }
            ]
        },
        {
            on: true,
            type: "recur",
            timeRange: [
                {
                    type: "recur",
                    start: "09:00 AM",
                    end: "5:00 PM"
                },
                {
                    type: "single",
                    start: "09:00 AM",
                }
            ]
        },
        {
            on: true,
            type: "recur",
            timeRange: [
                {
                    type: "recur",
                    start: "09:00 AM",
                    end: "5:00 PM"
                },
                {
                    type: "single",
                    start: "09:00 AM",
                }
            ]
        },
        {
            on: true,
            type: "recur",
            timeRange: [
                {
                    type: "recur",
                    start: "09:00 AM",
                    end: "5:00 PM"
                },
                {
                    type: "single",
                    start: "09:00 AM",
                }
            ]
        },
        {
            on: true,
            type: "recur",
            timeRange: [
                {
                    type: "recur",
                    start: "09:00 AM",
                    end: "5:00 PM"
                },
                {
                    type: "single",
                    start: "09:00 AM",
                }
            ]
        },
        {
            on: false,
            type: "recur",
            timeRange: [
                {
                    type: "recur",
                    start: "09:00 AM",
                    end: "5:00 PM"
                },
                {
                    type: "single",
                    start: "09:00 AM",
                }
            ]
        }
    ]
}

const availability = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default availability;