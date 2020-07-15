import React from "react";
import styled from "styled-components";
import FatText from "../../Components/FatText";
import Loader from "../../Components/Loader";
import UserCard from "../../Components/UserCard";
import SquarePost from "../../Components/SquarePost";

const Wrapper = styled.div`height: 50vh;`;

const Section = styled.div`
  margin-bottom: 50px;
  display: grid;
  grid-gap: 1.2%;
  grid-template-columns: repeat(5, 19%);
  grid-template-rows: 160px;
  grid-auto-rows: 160px;
`;

const PostSection = styled(Section)`
  grid-template-columns: repeat(4, 20%);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;

const SearchPresenter = ({ searchTerm, loading, data }) => {
  if (searchTerm === undefined) {
    return (
      <Wrapper>
        <FatText text="Search for something" />
      </Wrapper>
    );
  } else if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (data && data.searchUser && data.searchPost) {
    return (
      <Wrapper>
        <Section>
          {data.searchUser.length === 0
            ? <FatText text="No Users Found" />
            : data.searchUser.map(user =>
                <UserCard
                  key={user.id}
                  username={user.username}
                  isFollowing={user.isFollowing}
                  url={user.avatar}
                  isSelf={user.isSelf}
                  id={user.id}
                />
              )}
        </Section>
        <PostSection>
          {data.searchPost.length === 0
            ? <FatText text="No Posts Found" />
            : data.searchPost.map(post =>
                <SquarePost
                  key={post.id}
                  likeCount={post.likeCount}
                  commentCount={post.commentCount}
                  file={post.files[0]}
                />
              )}
        </PostSection>
      </Wrapper>
    );
  }
};

export default SearchPresenter;
