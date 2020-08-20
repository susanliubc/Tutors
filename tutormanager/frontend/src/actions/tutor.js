import { GET_TUTOR, ADD_TUTOR, DELETE_TUTOR, CREATE_MESSAGE } from './type';
import axios from 'axios';
import { returnError, createMessage } from './message';
import { tokenConfig } from './auth';

export const getTutors = () => (dispatch, getState) => {
  axios
    .get('/api/tutors/', tokenConfig(getState))
    .then(res => dispatch({ type: GET_TUTOR, payload: res.data }))
    .catch(error =>
      dispatch(returnError(error.response.data, error.response.status))
    );
};

export const addTutor = tutor => (dispatch, getState) => {
  axios
    .post('/api/tutors/', tutor, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addTutor: 'Tutor Added' }));
      dispatch({ type: ADD_TUTOR, payload: res.data });
    })
    .catch(error => {
      console.log('post error response: ', error.response);
      dispatch(returnError(error.response.data, error.response.status));
    });
};

export const deleteTutor = id => (dispatch, getState) => {
  axios
    .delete(`/api/tutors/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteTutor: 'Tutor Deleted' }));
      dispatch({ type: DELETE_TUTOR, payload: id });
    })
    .catch(error => {
      console.log('delete error: ', error);
      dispatch(returnError(error.response.data, error.response.status));
    });
};
