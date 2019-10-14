import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import {
  toggleItemAction,
  deleteItemAction
} from "../../store/actions/createActions";
import ListItem from "../UI/ListItem";
import { DeleteBtn, ToggleBtn } from "../UI/ActionBtn";

const TodoItem = props => {
  const { item, toggleItemAction, deleteItemAction } = props;

  return (
    <>
      <ListItem completed={item.completed} key={item.id}>
        <span onClick={() => toggleItemAction(item.id, item.completed)}>
          {item.title}
        </span>

        <div>
          <ToggleBtn
            completed={item.completed}
            onClick={() => toggleItemAction(item.id, item.completed)}
          >
            &#10004;
          </ToggleBtn>

          <DeleteBtn
            disabled={!item.completed}
            onClick={() => deleteItemAction(item.id)}
          >
            &#10006;
          </DeleteBtn>
        </div>
      </ListItem>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleItemAction: (id, completed) =>
    dispatch(toggleItemAction(id, completed)),
  deleteItemAction: id => dispatch(deleteItemAction(id))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoItem);

TodoItem.propTypes = {
  deleteItemAction: PropTypes.func,
  item: PropTypes.object.isRequired,
  toggleItemAction: PropTypes.func
};
