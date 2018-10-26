import { db } from './../firebase';
import { showPageLoading , hidePageLoading } from './loading';
import * as types from './actionTypes';

export const eventsFetch = (uid) => async dispatch => {
    let ref       = db.ref();
    let eventsRef = ref.child('events');

    dispatch(showPageLoading)

    eventsRef.orderByChild('uid').equalTo(uid).once('value')
        .then(snap => {
            let snapData = snap.val();
            let eventsData = Object.keys(snapData).map(key => ({
                ...snapData[key],
                id: key
            }))

            dispatch(hidePageLoading);
            dispatch({
                payload: eventsData,
                type: types.EVENTS_FETCH_SUCCESS
            })
        })
        .catch(err => {
            console.error("Events fetching error: ", err);
        })
}

export const publishEvent = (id, published) => async dispatch => {
    let timestamp = (new Date()).getTime(),
    eventRef = db.ref(`/events/${id}`);
    dispatch(showPageLoading);

    eventRef.update({
        published: !published,
        updated_at: timestamp
    })
    .then(() => {
        dispatch(hidePageLoading);
        dispatch({
            type: types.PUBLISH_EVENT_SUCCESS,
            payload: {
                id, published
            }
        })
    })
    .catch(err => {
        console.error('published switch: one of the updates failed: ', err);
    })
}

export const fetchEventById = (id) => async dispatch => {
    let eventRef = db.ref(`/events/${id}`);

    dispatch(showPageLoading);

    return new Promise((resolve, reject) => {
        
        eventRef.once('value')
        .then(snap => {
            let snapData = snap.val();
            dispatch(hidePageLoading)
            return resolve(snapData)
        })
        .catch(error => {
            console.error("Event fetching by id got error: ", error);
            dispatch({
                type: types.GET_EVENT_FAILURE,
                error
            })
            return reject(error)
        })
    })
}