import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

const InfoText = styled.p`
  color: ${theme.color.gray};
  position: absolute;
  padding-left: 3rem;
  bottom: 5px;
  font-size: ${theme.font.size.xxs};
  font-weight: ${theme.font.weight.light};
  margin: 0;
`;

export default InfoText;
