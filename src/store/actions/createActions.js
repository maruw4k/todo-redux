import {
  GET_INIT_DATA_START,
  INPUT_VALUE_CHANGE,
  ADD_ITEM_START,
  TOGGLE_ITEM_START,
  DELETE_ITEM_START,
  INFO_TEXT_CHANGE
} from "./actionTypes";

const getInputValueChangeAction = value => ({
  type: INPUT_VALUE_CHANGE,
  value
});

const getInitItemsAction = () => ({
  type: GET_INIT_DATA_START
});

const addItemAction = () => ({
  type: ADD_ITEM_START
});

const toggleItemAction = (id, completed) => ({
  type: TOGGLE_ITEM_START,
  id,
  completed
});

const deleteItemAction = id => ({
  type: DELETE_ITEM_START,
  id
});

const getInfoTextAction = value => ({
  type: INFO_TEXT_CHANGE,
  value
});
export {
  getInitItemsAction,
  getInputValueChangeAction,
  addItemAction,
  toggleItemAction,
  deleteItemAction,
  getInfoTextAction
};
