import { GET_INIT_DATA } from "./actionTypes";

const defaultState = {
  inputValue: "",
  list: [],
  loaded: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_INIT_DATA: {
      return {
        loaded: true,
        list: action.value
      };
    }
    default:
      return state;
  }
};
