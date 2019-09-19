import {
  ADD_ITEM,
  GET_INIT_DATA,
  INPUT_VALUE_CHANGE,
  TOGGLE_ITEM
} from "./actionTypes";

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
    case INPUT_VALUE_CHANGE: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.inputValue = action.value;
      return newState;
    }
    case ADD_ITEM: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.list = [...state.list, action.value];
      newState.inputValue = "";
      return newState;
    }
    case TOGGLE_ITEM: {
      return {
        ...state,
        list: state.list.map(todo =>
            todo.id === action.id ? {...todo, completed: !todo.completed} : todo
        )
      }
    }
    default:
      return state;
  }
};
