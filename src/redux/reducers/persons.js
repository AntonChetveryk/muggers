import { PERSONS_FETCH_DATA_SUCCESS } from "../actions/persons";

const initialState = {
  persons: [],
};

const persons = (state = initialState, action) => {
  switch (action.type) {
    case PERSONS_FETCH_DATA_SUCCESS:
      console.log("Fetch");
      console.log(action.persons);
      return state;
    default:
      return state;
  }
};

export default persons;
