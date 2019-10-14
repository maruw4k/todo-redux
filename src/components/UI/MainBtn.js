import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

const AddBtn = styled.button`
  padding: 0.7rem 0.5rem;
  background: ${theme.color.lightGray};
  border-radius: 3px;
  border: 2px solid ${theme.color.lightGray};
  cursor: pointer;
  transition: background-color 300ms;
  position: relative;
  z-index: 99;

  &:hover {
    background: ${theme.color.white};
  }
`;

export default AddBtn;
