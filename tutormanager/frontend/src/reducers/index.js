import { combineReducers } from 'redux';
import tutors from './tutors';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
  tutors,
  errors,
  messages,
  auth
});
