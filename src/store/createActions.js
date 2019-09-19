import {
  GET_INIT_ITEMS,
  GET_INIT_DATA,
  INPUT_VALUE_CHANGE,
  DELETE_ITEM,
  ADD_ITEM_START,
  TOGGLE_ITEM_START
} from "../store/actionTypes";

const getInputValueChangeAction = value => ({
  type: INPUT_VALUE_CHANGE,
  value
});

const getInitItemsAction = () => ({
  type: GET_INIT_ITEMS
});

const getInitDataAction = value => ({
  type: GET_INIT_DATA,
  value
});

const addItemAction = value => ({
  type: ADD_ITEM_START
});

const toggleItemAction = (id, completed) => ({
  type: TOGGLE_ITEM_START,
  id,
  completed
});

const getDeleteItemAction = index => ({
  type: DELETE_ITEM,
  index
});
export {
  getInitItemsAction,
  getInitDataAction,
  getInputValueChangeAction,
  addItemAction,
  toggleItemAction,
  getDeleteItemAction
};
