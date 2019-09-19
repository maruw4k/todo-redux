import {
  GET_INIT_ITEMS,
  ADD_ITEM,
  ADD_ITEM_START,
  TOGGLE_ITEM,
  TOGGLE_ITEM_START,
  DELETE_ITEM_START,
  DELETE_ITEM
} from "./actionTypes";
import API from "../utils/API.js";
import { getInitDataAction } from "./createActions";
import { select, takeEvery, put } from "@redux-saga/core/effects";

const NUMBER_OF_TODOS_ON_SERVER = 4;

function* getInitItemsData() {
  try {
    const res = yield API.fetchTodos();
    const action = getInitDataAction(res.data);
    yield put(action);
  } catch (error) {
    console.log("error: ", error);
  }
}

function* addItemsData() {
  try {
    const getToken = state => state;
    const token = yield select(getToken);
    const response = yield API.addNewTodo(token.inputValue);

    yield put({ type: ADD_ITEM, value: response.data });
  } catch (error) {
    console.log("error: ", error);
  }
}

function* toggleItemsData(action) {
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

function* deleteItemData(action) {
  try {
    if (action.id <= NUMBER_OF_TODOS_ON_SERVER) {
      yield API.deleteTodo(action.id);
    }
    yield put({ type: DELETE_ITEM, id: action.id });
  } catch (error) {
    console.log("error: ", error);
  }
}

function* mySaga() {
  yield takeEvery(GET_INIT_ITEMS, getInitItemsData);
  yield takeEvery(ADD_ITEM_START, addItemsData);
  yield takeEvery(TOGGLE_ITEM_START, toggleItemsData);
  yield takeEvery(DELETE_ITEM_START, deleteItemData);
}

export default mySaga;
