import styled from "styled-components";
import { theme } from "../../assets/styles/theme";
import PropTypes from "prop-types";

const InputText = styled.input`
  border: none;
  border-bottom: 2px solid ${theme.color.lightGray};
  font-size: ${theme.font.size.xs};
  margin: 0 2rem;
  padding: 0.5rem 0 0.5rem;
  color: black;
`;

export default InputText;

InputText.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
