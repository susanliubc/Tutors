import { GET_ERROR, CREATE_MESSAGE } from './type';

export const returnError = (msg, status) => {
  return {
    type: GET_ERROR,
    payload: { msg, status }
  };
};

export const createMessage = message => {
  return {
    type: CREATE_MESSAGE,
    payload: message
  };
};
