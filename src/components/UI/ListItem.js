import React from "react";
import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

const ListItem = styled.li`
  font-size: ${theme.font.size.xs};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0 1rem 2rem;
  border-bottom: 1px solid #e6ebed;
  cursor: pointer;

  a {
    color: ${props =>
      props.completed ? `${theme.color.lightGray}` : `${theme.color.black}`};
    text-decoration: ${props => (props.completed ? `line-through` : `none`)};
    padding-right: 4rem;
  }
`;
export default ({ completed, children }) => {
  return <ListItem completed={completed}>{children}</ListItem>;
};
