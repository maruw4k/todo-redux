import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  getSelectTask,
  isTasksEmpty
} from "../../store/selectors/todoSelectors";
import { getInitItemsAction } from "../../store/actions/createActions";

import Wrapper from "../../components/UI/Wrapper";
import Title from "../../components/UI/Title";
import List from "../../components/UI/List";
import ListItem from "../../components/UI/ListItem";
import MainBtn from "../../components/UI/MainBtn";
import Loader from "../../components/UI/Loader";

const StyledMainBtn = styled(MainBtn)`
  margin-left: 2rem;
`;

const TodoDetails = props => {
  const { getInitItemsAction, task, isTasksEmpty } = props;

  useEffect(() => {
    if (isTasksEmpty) {
      getInitItemsAction();
    }
  }, []);

  return (
    <>
      <Wrapper>
        <Title>Szczegóły zadania</Title>

        {task ? (
          <List>
            <ListItem>Treść: {task.title} </ListItem>
            <ListItem>ID: {task.id}</ListItem>
            <ListItem>Ukończone: {task.completed ? "Tak" : "Nie"}</ListItem>
            <ListItem>Id użytkownika: {task.userId} </ListItem>
          </List>
        ) : (
          <Loader />
        )}
        <Link to={"/"}>
          <StyledMainBtn>Wróć do listy</StyledMainBtn>
        </Link>
      </Wrapper>
    </>
  );
};

const mapStateToProps = (state, ownProps) =>
  createStructuredSelector({
    task: getSelectTask(ownProps.match.params.id),
    isTasksEmpty: isTasksEmpty()
  });

const mapDispatchToProps = dispatch => ({
  getInitItemsAction: () => dispatch(getInitItemsAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoDetails);
