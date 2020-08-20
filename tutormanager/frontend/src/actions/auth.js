import axios from 'axios';
import { returnError } from './message';

import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './type';

//Check token and load user
export const loadUser = () => (dispatch, getState) => {
  //User loading
  dispatch({ type: USER_LOADING });

  axios
    .get('api/auth/user', tokenConfig(getState))
    .then(res => dispatch({ type: USER_LOADED, payload: res.data }))
    .catch(error => {
      dispatch(returnError(error.response.data, error.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};

//Login user
export const login = (username, password) => dispatch => {
  //Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  //Request body
  const body = JSON.stringify({ username, password });

  axios
    .post('api/auth/login', body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({ type: LOGIN_FAIL });
    });
};

//Register user
export const register = ({ username, email, password }) => dispatch => {
  //Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  //Request body
  const body = JSON.stringify({ username, email, password });

  axios
    .post('api/auth/register', body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({ type: REGISTER_FAIL });
    });
};

//Logout user
export const logout = () => (dispatch, getState) => {
  axios
    .post('api/auth/logout', null, tokenConfig(getState))
    .then(res => {
      dispatch({ type: CLEAR_TUTOR });
      dispatch({ type: LOGOUT_SUCCESS });
    })
    .catch(err => {
      dispatch(returnError(err.response.data, err.response.status));
    });
};

//Set up token with config
export const tokenConfig = getState => {
  //Get token from state
  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  //if token exists, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};