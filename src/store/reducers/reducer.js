import {
  ADD_ITEM_START,
  ADD_ITEM,
  DELETE_ITEM_START,
  DELETE_ITEM,
  GET_INIT_DATA,
  INPUT_VALUE_CHANGE,
  TOGGLE_ITEM_START,
  TOGGLE_ITEM,
  INFO_TEXT_CHANGE
} from "../actions/actionTypes";

const defaultState = {
  inputValue: "",
  list: [],
  loaded: false,
  infoText: ""
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_INIT_DATA: {
      return { ...state, loaded: true, list: action.value };
    }
    case INPUT_VALUE_CHANGE: {
      return { ...state, inputValue: action.value };
    }
    case ADD_ITEM_START: {
      return { ...state, loaded: false };
    }
    case ADD_ITEM: {
      const newState = JSON.parse(JSON.stringify(state));

      //@todo temporary, prevent duplicate id, because fake api server doesn't save new todos
      action.value.id = new Date().valueOf();
      newState.list = [...state.list, action.value];
      newState.inputValue = "";
      newState.loaded = true;
      return newState;
    }
    case TOGGLE_ITEM_START: {
      return { ...state, loaded: false };
    }
    case TOGGLE_ITEM: {
      return {
        ...state,
        list: state.list.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
        loaded: true
      };
    }
    case DELETE_ITEM_START: {
      return { ...state, loaded: false };
    }
    case DELETE_ITEM: {
      return {
        ...state,
        list: state.list.filter(todo => todo.id !== action.id),
        loaded: true
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
