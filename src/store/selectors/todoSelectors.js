import { createSelector } from "reselect";

const selectTasksList = state => state.list;
const getSelectTask = id =>
  createSelector(
    selectTasksList,
    state => {
      return state.find(task => task.id === Number(id));
    }
  );

const isTasksEmpty = () =>
  createSelector(
    selectTasksList,
    state => {
      return state.length < 1;
    }
  );

export { selectTasksList, getSelectTask, isTasksEmpty };
