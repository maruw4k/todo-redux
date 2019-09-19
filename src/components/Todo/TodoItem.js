import React from "react";
import { connect } from "react-redux";
import { toggleItemAction, deleteItemAction } from "../../store/createActions";

const TodoItem = props => {
  const { item, handleToggleItem, handleDeleteItem } = props;

  const toggleToDo = (id, completed) => {
    handleToggleItem(id, completed);
  };

  const deleteToDo = id => {
    handleDeleteItem(id);
  };

  return (
    <>
      <li
        style={{ textDecorationLine: item.completed && "line-through" }}
        key={item.id}
      >
        <span onClick={() => toggleToDo(item.id, item.completed)}>
          {item.title}
        </span>

        <button onClick={() => deleteToDo(item.id)}>usuń</button>
      </li>
    </>
  );
};

const mapStateToProps = state => {
  return {
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleToggleItem(id, completed) {
      const action = toggleItemAction(id, completed);
      dispatch(action);
    },
    handleDeleteItem(id) {
      const action = deleteItemAction(id);
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);
