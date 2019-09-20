import { takeEvery } from "@redux-saga/core/effects";
import {
  getInitItemsData,
  addItemsData,
  toggleItemsData,
  deleteItemData
} from "./todos";
import {
  ADD_ITEM_START,
  DELETE_ITEM_START,
  GET_INIT_DATA_START,
  TOGGLE_ITEM_START
} from "../actions/actionTypes";

function* mySaga() {
  yield takeEvery(GET_INIT_DATA_START, getInitItemsData);
  yield takeEvery(ADD_ITEM_START, addItemsData);
  yield takeEvery(TOGGLE_ITEM_START, toggleItemsData);
  yield takeEvery(DELETE_ITEM_START, deleteItemData);
}

export default mySaga;
