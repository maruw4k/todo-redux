import { takeEvery, put } from "redux-saga/effects";
import { GET_INIT_ITEMS, ADD_ITEM, ADD_ITEM_START } from "./actionTypes";
import { getInitDataAction } from "./createActions";
import { select } from "@redux-saga/core/effects";
import API from "../utils/API.js";

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

function* mySaga() {
  yield takeEvery(GET_INIT_ITEMS, getInitItemsData);
  yield takeEvery(ADD_ITEM_START, addItemsData);
}

export default mySaga;
