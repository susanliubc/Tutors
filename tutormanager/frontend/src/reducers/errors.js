import { GET_ERROR } from '../actions/type';

const initState = {
  msg: '',
  status: null
};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_ERROR:
      return { msg: action.payload.msg, status: action.payload.status };
    default:
      return state;
  }
}
