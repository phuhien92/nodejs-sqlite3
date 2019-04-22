import { db } from '../firebase';
import { showPageLoading, hidePageLoading } from './loading';
import * as types from './actionTypes';

export const eventsFetch = uid => async (dispatch) => {
  const eventsRef = db.ref().child('events');

  return new Promise((resolve, reject) => {
    eventsRef.orderByChild('uid').equalTo(uid).once('value')
      .then((snap) => {
        const snapData = snap.val();
        const eventsData = snapData ? Object.keys(snapData).map(key => ({
          ...snapData[key],
          id: key,
        })) : [];

        dispatch(hidePageLoading);
        dispatch({
          payload: eventsData,
          type: types.EVENTS_FETCH_SUCCESS,
        });
        return resolve(eventsData);
      })
      .catch((err) => {
        console.error('Events fetching error: ', err);
        return reject(err);
      });
  });
};

export const publishEvent = (id, published) => async (dispatch) => {
  const timestamp = (new Date()).getTime();
  const eventRef = db.ref(`/events/${id}`);
  dispatch(showPageLoading);

  eventRef.update({
    published: !published,
    updated_at: timestamp,
  })
    .then(() => {
      dispatch(hidePageLoading);
      dispatch({
        type: types.PUBLISH_EVENT_SUCCESS,
        payload: {
          id, published,
        },
      });
    })
    .catch((err) => {
      console.error('published switch: one of the updates failed: ', err);
    });
};

export const fetchEventById = id => async (dispatch) => {
  const eventRef = db.ref(`/events/${id}`);

  dispatch(showPageLoading);

  return new Promise((resolve, reject) => {
    eventRef.once('value')
      .then((snap) => {
        const snapData = snap.val();
        dispatch(hidePageLoading);
        return resolve(snapData);
      })
      .catch((error) => {
        console.error('Event fetching by id got error: ', error);
        dispatch({
          type: types.GET_EVENT_FAILURE,
          error,
        });
        return reject(error);
      });
  });
};

export const fetchAvailablityByUIDandEventId = eventId => async (dispatch) => {
  const avaiRef = db.ref('availability');
  dispatch(showPageLoading);

  return new Promise((resolve, reject) => {
    avaiRef
    // .orderByChild('uid').equalTo(uid)
      .orderByChild('eventId').equalTo(eventId)
      .once('value')
      .then((snap) => {
        const snapData = snap.val();
        const avaiValues = Object.keys(snapData).map(id => ({
          ...snapData[id],
          id,
        }));

        dispatch(hidePageLoading);
        return resolve(avaiValues[0]);
      })
      .catch((error) => {
        console.error('Avai fetching by uid/eventId got error: ', error);
        return reject(error);
      });
  });
};
