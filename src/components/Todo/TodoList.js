import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getInitItemsAction } from "../../store/actions/createActions";
import TodoItem from "./TodoItem";
import TodoAdd from "./TodoAdd";
import Loader from "../common/Loader";
import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

const Wrapper = styled.div`
  position: relative;
  min-width: 300px;
  padding: 2rem 0.5rem 2rem 0;
  background: ${theme.color.white};
  border: 1px solid ${theme.color.lightGray};
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  ${theme.mq.phone} {
    padding: 3rem 0.5rem 3rem 0;
  }

  ${theme.mq.tablet} {
    min-width: 400px;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    height: 4px;
    background: ${theme.color.white};
    border: 1px solid ${theme.color.lightGray};
    border-radius: 2px;
  }

  &:after {
    left: 0;
    right: 0;
    bottom: -3px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  &:before {
    left: 2px;
    right: 2px;
    bottom: -5px;
    border-color: #c4c4c4;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  }
`;

const List = styled.ul`
  padding: 0;
  border-top: 1px solid ${theme.color.lightGray};
  list-style-type: none;

  ${theme.mq.tablet} {
    &::before {
      content: "";
      width: 3px;
      z-index: 2;
      border: 1px solid ${theme.color.lightRed};
      position: absolute;
      top: 0;
      bottom: 0;
      right: 60px;
    }
  }
`;

const Title = styled.h1`
  font-weight: ${theme.font.weight.bold};
  padding-left: 2rem;
  margin: 0;
`;

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
