import React from "react";
import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

const Spinner = styled.div`
  position: absolute;
  right: 17px;
  top: 20px;
  width: 30px;
  height: 30px;
  background-color: ${theme.color.darkGray};

  border-radius: 100%;
  -webkit-animation: sk-scaleout 500ms infinite ease-in-out;
  animation: sk-scaleout 500ms infinite ease-in-out;

  @-webkit-keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0;
    }
  }
`;

export default () => <Spinner />;
