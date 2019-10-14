import React from "react";
import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

const Wrapper = styled.div`
  position: relative;
  min-width: 300px;
  padding: 2rem 0.5rem 2rem 0;
  background: ${theme.color.white};
  border: 1px solid ${theme.color.lightGray};
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  ${theme.mq.phone} {
    padding: 3rem 0.5rem 3rem 0;
  }

  ${theme.mq.tablet} {
    min-width: 400px;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    height: 4px;
    background: ${theme.color.white};
    border: 1px solid ${theme.color.lightGray};
    border-radius: 2px;
  }

  &:after {
    left: 0;
    right: 0;
    bottom: -3px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  &:before {
    left: 2px;
    right: 2px;
    bottom: -5px;
    border-color: #c4c4c4;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  }
`;

export default ({ children }) => <Wrapper>{children}</Wrapper>;
