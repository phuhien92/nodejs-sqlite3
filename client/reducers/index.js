import { combineReducers } from 'redux';
import auth from './auth';
import loading from './loading';
import event from './event';
import events from './events';
import edit_event from './edit_event';

const rootReducer = combineReducers({
  loading,
  auth,
  event,
  edit_event,
  events
});

export default rootReducer;