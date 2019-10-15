import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getInitItemsAction } from "../../store/actions/createActions";
import TodoItem from "../../components/Todos/TodoItem";
import TodoAdd from "../../components/Todos/TodoAdd";
import Loader from "../../components/UI/Loader";
import Wrapper from "../../components/UI/Wrapper";
import Title from "../../components/UI/Title";
import List from "../../components/UI/List";

const TodoList = props => {
  const { getInitItemsAction, list, loaded } = props;

  useEffect(() => {
    getInitItemsAction();
  }, []);

  return (
    <>
      <Wrapper>
        {!loaded && <Loader />}

        <Title>Lista zadań</Title>

        <List>
          {list && list.map(item => <TodoItem key={item.id} item={item} />)}
        </List>

        <TodoAdd />
      </Wrapper>
    </>
  );
};

const mapStateToProps = state => {
  return {
    list: state.list,
    loaded: state.loaded
  };
};

const mapDispatchToProps = dispatch => ({
  getInitItemsAction: () => dispatch(getInitItemsAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

TodoList.propTypes = {
  getInitItemsAction: PropTypes.func,
  list: PropTypes.array,
  loaded: PropTypes.bool
};
