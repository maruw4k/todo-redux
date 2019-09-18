import { takeEvery, put } from "redux-saga/effects";
import { GET_INIT_ITEMS } from "./actionTypes";
import { getInitDataAction } from "./createActions";
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

function* mySaga() {
  yield takeEvery(GET_INIT_ITEMS, getInitItemsData);
}

export default mySaga;
