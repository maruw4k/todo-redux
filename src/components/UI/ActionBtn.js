import styled from "styled-components";
import { theme } from "../../assets/styles/theme";
import PropTypes from "prop-types";

const ActionBtn = styled.button`
  background: none;
  border-radius: 3px;
  border: 2px solid ${theme.color.white};
  cursor: pointer;
  transition: background-color 300ms;
  padding: 0;
  width: 25px;
  height: 25px;

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

export const DeleteBtn = styled(ActionBtn)`
  color: ${theme.color.red};
`;

export const ToggleBtn = styled(ActionBtn)`
  color: ${props =>
    props.completed ? `${theme.color.black}` : `${theme.color.green}`};
`;

ActionBtn.propTypes = {
  completed: PropTypes.bool
};
