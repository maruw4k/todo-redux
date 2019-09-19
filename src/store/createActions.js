import {
  GET_INIT_ITEMS,
  GET_INIT_DATA,
  INPUT_VALUE_CHANGE,
  ADD_ITEM,
  TOGGLE_ITEM,
  DELETE_ITEM,
  ADD_ITEM_START
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

const toggleItemAction = id => ({
  type: TOGGLE_ITEM,
  id
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
