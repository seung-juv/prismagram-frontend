import React from "react";
import styled from "styled-components";

const Container = styled.button`
  width: 100%;
  border: 0;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  background-color: ${props => props.theme.blueColor};
  text-align: center;
  padding: 7px 24px;
  font-size: 14px;
  cursor: pointer;
`;

const Button = ({ text, onClick, className }) =>
  <Container onClick={onClick} className={className}>
    {text}
  </Container>;

export default Button;
