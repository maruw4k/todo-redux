import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getInitItemsAction } from "../../store/createActions";
import TodoItem from "./TodoItem";
import TodoAdd from "./TodoAdd";

const TodoList = props => {
  const { getInitItems, list } = props;

  useEffect(() => {
    console.log("useEffect()");
    getInitItems();
  }, []);

  return (
    <>
      <TodoAdd />

      <ul>
        {list && list.map(item => <TodoItem key={item.id} item={item} />)}
      </ul>
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
    getInitItems() {
      const action = getInitItemsAction();
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
