import React, { useState } from "react";
import styled from "styled-components";
import TextareaAutosize from "react-autosize-textarea";

const Wrapper = styled.form`
  width: 100%;
  display: flex;
  border-top: ${props => props.theme.lightBoxColor} 1px solid;
  padding: 20px 15px;
  margin: 15px 0px 0px;
  flex-flow: row nowrap;
`;

const AddComments = styled(TextareaAutosize)`
  border: none;
  flex: 1;
  resize: none;
  font-size: 14px;
  font: inherit;
  &:focus {
    outline: none;
  }
`;

const Submit = styled.button`
  color: ${props => props.theme.blueColor};
  opacity: .5;
  cursor: default;
  pointer-events: none;
  ${props => props.active && `cursor: pointer; pointer-event: all; opacity: 1;`};
`;

export default ({ value, onChange, onSubmit, className }) => {
  const [isActive, setIsActive] = useState(0);
  const onKeyPress = async e => {
    const { which } = e;
    if (which === 13) {
      e.preventDefault();
      onSubmit();
    }
    return;
  };

  const onKeyUp = e => {
    if (value === "") {
      setIsActive(0);
    } else {
      setIsActive(1);
    }
  };

  return (
    <Wrapper className={className}>
      <AddComments
        placeholder="댓글 달기..."
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
      />
      <Submit onClick={onSubmit} active={isActive ? 1 : 0}>
        게시
      </Submit>
    </Wrapper>
  );
};
