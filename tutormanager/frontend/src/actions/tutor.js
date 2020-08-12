import { GET_TUTOR, ADD_TUTOR, DELETE_TUTOR } from './type';
import axios from 'axios';

export const getTutors = () => (dispatch, getState) => {
  axios
    .get('/api/tutors/')
    .then(res => dispatch({ type: GET_TUTOR, payload: res.data }))
    .catch(error => console.log('error: ', error));
};

export const addTutor = tutor => (dispatch, getState) => {
  axios
    .post('/api/tutors/', tutor)
    .then(res => dispatch({ type: ADD_TUTOR, payload: res.data }))
    .catch(error => console.log('error: ', error));
};

export const deleteTutor = id => (dispatch, getState) => {
  axios
    .delete(`/api/tutors/${id}/`)
    .then(res => dispatch({ type: DELETE_TUTOR, payload: id }))
    .catch(error => console.log('error: ', error));
};
