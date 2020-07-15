import React, { useState } from "react";
import styled from "styled-components";
import { HeartFull, CommentFull } from "./Icons";
import PostView from "./PostView";

const Container = styled.div`
  background-image: url(${props => props.bg});
  background-size: cover;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  cursor: pointer;
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

const SquarePost = ({ id, location, caption, user, files, likeCount, isLiked, comments, commentCount, isSelf, createdAt, file, isFollowing }) => {
  const [isOnMouseEnter, setIsOnMouseEnter] = useState(false);
  const [isPostView, setIsPostView] = useState(false);

  const onMouseEnter = () => {
    setIsOnMouseEnter(true);
  };

  const onMouseLeave = () => {
    setIsOnMouseEnter(false);
  };

  const onClick = () => {
    setIsPostView(!isPostView);
  };
  return (
    <>
      <Container bg={file.url} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {isOnMouseEnter &&
        <Overlay onClick={onClick}>
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
      {isPostView && 
        <PostView
          key={id}
          id={id}
          location={location}
          caption={caption}
          user={user}
          isSelf={isSelf}
          files={files}
          likeCount={likeCount}
          isLiked={isLiked}
          comments={comments}
          createdAt={createdAt}
          postView={true}
          onClick={onClick}
          isFollowing={isFollowing}
        />
      }
    </>
  );
};

export default SquarePost;
