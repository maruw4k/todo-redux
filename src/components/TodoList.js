import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getInitItemsAction,
  getInputValueChangeAction,
  addItemAction
} from "../store/createActions";

const TodoList = props => {
  const {
    inputValue,
    getInitItems,
    inputValueChange,
    list,
    handleAddItem
  } = props;

  const handleAddToDo = () => {
    if (list.length > 10) {
      console.log("Maksymalna ilość zadań to 10");
    } else if (inputValue === "" || inputValue.length < 3) {
      console.log("Zbyt krótki tytuł");
    } else {
      handleAddItem(inputValue);
    }
  };

  useEffect(() => {
    console.log("useEffect()");
    getInitItems();
  }, []);

  return (
    <>
      <input
        placeholder="Wpisz zadanie"
        type="text"
        value={inputValue || ""}
        onChange={inputValueChange}
      />

      <button onClick={handleAddToDo}>Dodaj zadanie</button>

      <div>
        <ul>{list && list.map(item => <li key={item.id}>{item.title}</li>)}</ul>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list,
    loaded: state.loaded
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inputValueChange(e) {
      const action = getInputValueChangeAction(e.target.value);
      dispatch(action);
    },
    getInitItems() {
      const action = getInitItemsAction();
      dispatch(action);
    },
    handleAddItem() {
      const action = addItemAction();
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
