import React from "react";
import styled from "styled-components";

const Text = styled.span`
  font-weight: 600;
  user-select: none;
`;

const FatText = ({ text }) =>
  <Text>
    {text}
  </Text>;

export default FatText;
