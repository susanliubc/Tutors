import { GET_TUTOR, ADD_TUTOR, DELETE_TUTOR } from '../actions/type.js';

const initState = {
  tutors: []
};

const tutors = (state = initState, action) => {
  switch (action.type) {
    case GET_TUTOR:
      return { ...state, tutors: action.payload };
    case ADD_TUTOR:
      return { ...state, tutors: action.payload };
    case DELETE_TUTOR:
      return {
        ...state,
        tutors: state.filter(tutor => tutor.id !== action.payload)
      };
    default:
      return state;
  }
};

export default tutors;
