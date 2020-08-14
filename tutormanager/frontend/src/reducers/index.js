import { combineReducers } from 'redux';
import tutors from './tutors';
import errors from './errors';
import messages from './messages';

export default combineReducers({
  tutors,
  errors,
  messages
});
