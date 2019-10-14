import React from "react";
import { Link, useParams } from "react-router-dom";
import Wrapper from "../../components/UI/Wrapper";
import Title from "../../components/UI/Title";
import List from "../../components/UI/List";
import ListItem from "../../components/UI/ListItem";
import MainBtn from "../../components/UI/MainBtn";
import styled from "styled-components";

const StyledMainBtn = styled(MainBtn)`
  margin-left: 2rem;
`;

const TodoDetails = () => {
  const { id } = useParams();
  return (
    <>
      <Wrapper>
        <Title>Szczegóły zadania</Title>

        <List>
          <ListItem>ID: {id}</ListItem>
          <ListItem>Treść: </ListItem>
          <ListItem>Ukończone: </ListItem>
          <ListItem>Użytkownik: </ListItem>
        </List>
        <StyledMainBtn>
          <Link to={"/"}>Wróć do listy</Link>
        </StyledMainBtn>
      </Wrapper>
    </>
  );
};

export default TodoDetails;
