import { GET_TUTOR, ADD_TUTOR, DELETE_TUTOR, CREATE_MESSAGE } from './type';
import axios from 'axios';
import { returnError, createMessage } from './message';

export const getTutors = () => (dispatch, getState) => {
  console.log('get tutor');
  axios
    .get('/api/tutors/')
    .then(res => dispatch({ type: GET_TUTOR, payload: res.data }))
    .catch(error => console.log('error: ', error));
};

export const addTutor = tutor => (dispatch, getState) => {
  console.log('add tutor');
  axios
    .post('/api/tutors/', tutor)
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
  console.log('delete tutor');
  axios
    .delete(`/api/tutors/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteTutor: 'Tutor Deleted' }));
      dispatch({ type: DELETE_TUTOR, payload: id });
    })
    .catch(error => {
      console.log('delete error: ', error);
      dispatch(returnError(error.response.data, error.response.status));
    });
};
