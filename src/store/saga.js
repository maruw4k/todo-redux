import { takeEvery, put } from "redux-saga/effects";
import { GET_INIT_ITEMS } from "./actionTypes";
import { getInitItemsAction } from "./createActions";

function* getInitItemsData() {
  try {
    const res = yield fetch(
      "https://my-json-server.typicode.com/maruw4k/fake-rest-server/todos"
    )
      .then(response => response.json())
      .then(json => console.log(json));

    const action = getInitItemsAction(res.data);
    yield put(action);
  } catch (error) {
    console.log("error: ", error);
  }
}

function* mySaga() {
  yield takeEvery(GET_INIT_ITEMS, getInitItemsData);
}

export default mySaga;
