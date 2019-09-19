import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getInitItemsAction,
  getInputValueChangeAction,
  addItemAction,
  toggleItemAction
} from "../store/createActions";

const TodoList = props => {
  const {
    inputValue,
    getInitItems,
    inputValueChange,
    list,
    handleAddItem,
    handleToggleItem
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

  const toggleToDo = (id, completed) => {
    console.log(id);
    handleToggleItem(id, completed);
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
        <ul>
          {list &&
            list.map(item => (
              <li
                style={{ textDecorationLine: item.completed && "line-through" }}
                onClick={() => toggleToDo(item.id, item.completed)}
                key={item.id}
              >
                {item.title}
              </li>
            ))}
        </ul>
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

const mapDispatchToProps = dispatch => {
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
    },
    handleToggleItem(id, completed) {
      const action = toggleItemAction(id, completed);
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
