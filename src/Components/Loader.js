import React from "react";
import styled, { keyframes } from "styled-components";
import { Logo } from "./Icons";

const Animation = keyframes`
  0% {
    opacity: .25
  }
  50% {
    opacity: .5
  }
  100% {
    opacity: .25
  }
`;

const Loader = styled.div`
  animation: ${Animation} 1s linear infinite;
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default () =>
  <Loader>
    <Logo size={36} />
  </Loader>;
