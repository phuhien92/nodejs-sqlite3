import { combineReducers } from 'redux';

import auth from './auth';
import loading from './loading';

const rootReducer = combineReducers({
  loading,
  auth
});

export default rootReducer;