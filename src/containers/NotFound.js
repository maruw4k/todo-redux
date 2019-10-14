import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MainBtn from "../components/UI/MainBtn";
import Title from "../components/UI/Title";
import Wrapper from "../components/UI/Wrapper";

const StyledMainBtn = styled(MainBtn)`
  margin: 2rem 0 0 2rem;
`;

const NotFound = () => {
  return (
    <Wrapper>
      <Title>Nie znaleziono</Title>

      <StyledMainBtn>
        <Link to={"/"}>Wróć do listy</Link>
      </StyledMainBtn>
    </Wrapper>
  );
};

export default NotFound;
