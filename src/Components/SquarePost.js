import React, { useState } from "react";
import styled from "styled-components";
import { HeartFull, CommentFull } from "./Icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-image: url(${props => props.bg});
  background-size: cover;
`;

const Overlay = styled(Link)`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    fill: white;
  }
`;

const Number = styled.div`
  color: white;
  display: flex;
  align-items: center;
  &:first-child {
    margin-right: 25px;
  }
`;

const NumberText = styled.span`
  margin-left: 5px;
  font-size: 16px;
`;

const SquarePost = ({ likeCount, commentCount, file }) => {
  const [isOnMouseEnter, setIsOnMouseEnter] = useState(false);

  const onMouseEnter = () => {
    setIsOnMouseEnter(true);
  };

  const onMouseLeave = () => {
    setIsOnMouseEnter(false);
  };

  return (
    <Container bg={file.url} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {isOnMouseEnter &&
        <Overlay to="/">
          <Number>
            <HeartFull />
            <NumberText>
              {likeCount}
            </NumberText>
          </Number>
          <Number>
            <CommentFull />
            <NumberText>
              {commentCount}
            </NumberText>
          </Number>
        </Overlay>}
    </Container>
  );
};

export default SquarePost;
