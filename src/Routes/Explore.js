import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";
import SquarePost from "../Components/SquarePost";

const FEED_QUERY = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        username
        avatar
        isFollowing
      }
      likeCount
      isLiked
      createdAt
      comments {
        id
        text
        user {
          id
          username
          avatar
        }
        createdAt
      }
      files {
        url
      }
      likeCount
      commentCount
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 293px);
  grid-template-rows: 293px;
  grid-auto-rows: 293px;
  grid-gap: 28px;
`;

export default () => {
  const { data, loading } = useQuery(FEED_QUERY);
  return (
    <Wrapper>
      <Helmet>
        <title>Prismagram</title>
      </Helmet>
      {loading && <Loader />}
      <Posts>
        {!loading &&
          data &&
          data.seeFeed &&
          data.seeFeed.map(post =>
            <SquarePost
              key={post.id}
              id={post.user.id}
              location={post.location}
              caption={post.caption}
              isSelf={post.user.isSelf}
              user={post.user}
              files={post.files}
              likeCount={post.likeCount}
              isLiked={post.isLiked}
              comments={post.comments}
              createdAt={post.createdAt}
              commentCount={post.commentCount}
              file={post.files[0]}
              isFollowing={post.user.isFollowing}
            />
          )}
      </Posts>
    </Wrapper>
  );
};
