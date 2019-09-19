import React from "react";
import { connect } from "react-redux";
import {
  getInputValueChangeAction,
  addItemAction
} from "../../store/createActions";

const TodoAdd = props => {
  const { inputValue, inputValueChange, list, handleAddItem } = props;

  const handleAddToDo = () => {
    if (list.length > 10) {
      console.log("Maksymalna ilość zadań to 10");
    } else if (inputValue === "" || inputValue.length < 3) {
      console.log("Zbyt krótki tytuł");
    } else {
      handleAddItem(inputValue);
    }
  };

  return (
    <>
      <input
        placeholder="Wpisz zadanie"
        type="text"
        value={inputValue || ""}
        onChange={inputValueChange}
      />

      <button onClick={handleAddToDo}>Dodaj zadanie</button>
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

const mapDispatchToProps = dispatch => {
  return {
    inputValueChange(e) {
      const action = getInputValueChangeAction(e.target.value);
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
)(TodoAdd);
