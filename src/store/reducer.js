import {
  ADD_ITEM,
  DELETE_ITEM,
  GET_INIT_DATA,
  INPUT_VALUE_CHANGE,
  TOGGLE_ITEM
} from "./actionTypes";

const defaultState = {
  inputValue: "",
  list: [
    {
      "userId": 1,
      "id": 1,
      "title": "napisać kod",
      "completed": true
    },
    {
      "userId": 1,
      "id": 2,
      "title": "zrobić deploy",
      "completed": true
    },
    {
      "userId": 1,
      "id": 3,
      "title": "wysłać rozwiązanie",
      "completed": true
    },
    {
      "userId": 1,
      "id": 4,
      "title": "odczytać odpowiedź",
      "completed": false
    }
  ],
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
    default:
      return state;
  }
};
