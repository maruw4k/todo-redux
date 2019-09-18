import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getInitItemsAction } from "../store/createActions";

const TodoList = props => {
  const handleAddToDo = event => {
    event.preventDefault();
    console.log("handleAddToDo");

    console.log(props);
  };

  useEffect(() => {
    props.getInitItems();
    console.log(props);
  }, []);

  return (
    <>
      <input placeholder="Wpisz zadanie" type="text" />

      <button onClick={handleAddToDo}>Dodaj zadanie</button>

      <div>
        <ul>
          {props.list &&
            props.list.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
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
