import { PERSONS_FETCH_DATA_SUCCESS, ADD_MUGGER } from "../actions/persons";

const initialState = {
  persons: [],
};

const persons = (state = initialState, action) => {
  switch (action.type) {
    case PERSONS_FETCH_DATA_SUCCESS:
      return { persons: action.persons };
    case ADD_MUGGER:
      return state;
    default:
      return state;
  }
};

export default persons;
