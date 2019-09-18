import {
  GET_INIT_ITEMS,
  INPUT_VALUE_CHANGE,
  ADD_ITEM,
  DELETE_ITEM
} from "../store/actionTypes";

const getInputValueChangeAction = value => ({
  type: INPUT_VALUE_CHANGE,
  value
});

const getInitItemsAction = () => ({
  type: GET_INIT_ITEMS
});

const getAddItemAction = () => ({
  type: ADD_ITEM
});

const getDeleteItemAction = index => ({
  type: DELETE_ITEM,
  index
});
export {
  getInitItemsAction,
  getInputValueChangeAction,
  getAddItemAction,
  getDeleteItemAction
};
