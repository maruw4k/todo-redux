import {
  ADD_ITEM,
  TOGGLE_ITEM,
  DELETE_ITEM, GET_INIT_DATA
} from "../actions/actionTypes";
import API from "../../utils/API";
import { select, put } from "@redux-saga/core/effects";

const NUMBER_OF_TODOS_ON_SERVER = 4;

export function* getInitItemsData() {
  try {
    const response = yield API.fetchTodos();
    yield put({ type: GET_INIT_DATA, value: response.data });
  } catch (error) {
    console.log("error: ", error);
  }
}

export  function* addItemsData() {
  try {
    const getToken = state => state;
    const token = yield select(getToken);
    const response = yield API.addNewTodo(token.inputValue);

    yield put({ type: ADD_ITEM, value: response.data });
  } catch (error) {
    console.log("error: ", error);
  }
}

export function* toggleItemsData(action) {
  try {
    //@todo ugly, because is used faked API (only 4 constant post on server) and locally changes aren't persisted
    if (action.id <= NUMBER_OF_TODOS_ON_SERVER) {
      const response = yield API.toggleTodo(action.id, !action.completed);
      yield put({ type: TOGGLE_ITEM, id: response.data.id });
    } else {
      yield put({ type: TOGGLE_ITEM, id: action.id });
    }
  } catch (error) {
    console.log("error: ", error);
  }
}

export function* deleteItemData(action) {
  try {
    if (action.id <= NUMBER_OF_TODOS_ON_SERVER) {
      yield API.deleteTodo(action.id);
    }
    yield put({ type: DELETE_ITEM, id: action.id });
  } catch (error) {
    console.log("error: ", error);
  }
}
