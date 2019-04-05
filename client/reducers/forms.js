import * as types from '../actions/actionTypes';

const event_initial_state = {
    published: false,
    event_type: "OnetoOne",
    event_name: '',
    event_duration_hours: 0,
    event_duration_minutes: 0,
    event_color: { value: '#FF3C38', label: 'RED'},
    event_location: '',
    event_description: '',
    event_link: '',
    repetition: 'never', // 0: never / 1: date / 2: interval,
    start_date: null,
    end_date: null,
    isScheduleAutoConfirm: true,
    allowUserCancelEvent: true,
    sentBookingConfEmailToInvitee: true,
    isSentReminderEmail: false,
    advanceBooingBefore: 0,
    uid: null,
    eventId: null
}

const forms = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default forms;