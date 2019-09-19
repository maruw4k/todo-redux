import {
  ADD_ITEM,
  DELETE_ITEM,
  GET_INIT_DATA,
  INPUT_VALUE_CHANGE,
  TOGGLE_ITEM,
  INFO_TEXT_CHANGE
} from "./actionTypes";

const defaultState = {
  inputValue: "",
  list: [],
  loaded: false,
  infoText: ""
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_INIT_DATA: {
      return {
        loaded: true,
        list: action.value,
        infoText: ""
      };
    }
    case INPUT_VALUE_CHANGE: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.inputValue = action.value;
      return newState;
    }
    case ADD_ITEM: {
      const newState = JSON.parse(JSON.stringify(state));

      //@todo temporary, prevent duplicate id, because fake api server doesn't save new todos
      action.value.id = state.list.length + 1;

      newState.list = [...state.list, action.value];
      newState.inputValue = "";
      return newState;
    }
    case TOGGLE_ITEM: {
      return {
        ...state,
        list: state.list.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    }
    case DELETE_ITEM: {
      return {
        ...state,
        list: state.list.filter(todo => todo.id !== action.id)
      };
    }
    case INFO_TEXT_CHANGE: {
      return {
        ...state,
        infoText: action.value
      };
    }
    default:
      return state;
  }
};
