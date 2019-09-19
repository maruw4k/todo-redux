import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { toggleItemAction, deleteItemAction } from "../../store/createActions";
import { theme } from "../../assets/styles/theme";

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0 1rem 2rem;
  font-size: ${theme.font.size.xs};
  border-bottom: 1px solid #e6ebed;
  cursor: pointer;

  span {
    color: ${props =>
      props.completed ? `${theme.color.lightGray}` : `${theme.color.black}`};
    text-decoration: ${props => (props.completed ? `line-through` : `none`)};
    padding-right: 4rem;
  }
`;

const ActionBtn = styled.button`
  background: none;
  border-radius: 3px;
  border: 2px solid ${theme.color.white};
  cursor: pointer;
  transition: background-color 300ms;

  &:disabled {
    opacity: 0.4;

    &:hover {
      border: 2px solid ${theme.color.white};
      background: none;
    }
  }

  &:hover {
    border: 2px solid ${theme.color.lightGray};
    background: none;
  }
`;

const DeleteBtn = styled(ActionBtn)`
  color: ${theme.color.red};
`;

const ToggleBtn = styled(ActionBtn)`
  color: ${theme.color.green};
`;

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
      <ListItem completed={item.completed} key={item.id}>
        <span onClick={() => toggleToDo(item.id, item.completed)}>
          {item.title}
        </span>

        <div>
          <ToggleBtn onClick={() => toggleToDo(item.id, item.completed)}>
            &#10004;
          </ToggleBtn>

          <DeleteBtn
            disabled={!item.completed}
            onClick={() => deleteToDo(item.id)}
          >
            &#10006;
          </DeleteBtn>
        </div>
      </ListItem>
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
