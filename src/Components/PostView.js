import React from "react";
import styled from "styled-components";
import Post from "./Post";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 150;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Closepost = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export default ({
  id,
  location,
  caption,
  user,
  files,
  likeCount,
  isLiked,
  comments,
  isSelf,
  createdAt,
  onClick,
  postView,
  isFollowing
}) => {
  return (
    <Wrapper>
      <Closepost onClick={onClick} />
      <Post
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
        postView={postView}
        isFollowing={isFollowing}
      />
    </Wrapper>
  );
};
