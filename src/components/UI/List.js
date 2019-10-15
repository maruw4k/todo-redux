import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

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

export default List;
