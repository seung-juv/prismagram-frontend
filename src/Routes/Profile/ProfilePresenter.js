import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";
import FollowButton from "../../Components/FollowButton";
import SquarePost from "../../Components/SquarePost";
import Button from "../../Components/Button";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 44px;
`;

const Picture = styled.div`
  flex: 1;
  margin-right: 30px;
  display: flex;
  justify-content: center;
`;

const Profile = styled.section`flex: 2 30px;`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const Username = styled.h2`
  font-size: 28px;
  display: block;
  font-weight: 300;
  margin-right: 15px;
`;

const Counts = styled.ul`
  display: flex;
  margin-bottom: 20px;
`;

const Count = styled.li`
  font-size: 16px;
  &:not(:last-child) {
    margin-right: 40px;
  }
`;

const FullName = styled(FatText)`
  display: block;
  margin-bottom: 3px;
  font-size: 16px;
`;

const Bio = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

const EFollowButton = styled(FollowButton)`
  width: auto;
  padding: 0 24px;
`;

const EButton = styled(Button)`
  width: auto;
  padding: 5px 24px;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 293px);
  grid-template-rows: 293px;
  grid-auto-rows: 293px;
  grid-gap: 28px;
`;

const ProfilePresenter = ({
  id,
  avatar,
  username,
  fullName,
  isFollowing,
  isSelf,
  bio,
  posts,
  followingCount,
  followersCount,
  postsCount,
  logOut
}) => {
  return (
    <>
      <Helmet>
        <title>
          {fullName}&#40;@{username}&#41; • Prismagram 사진 및 동영상
        </title>
      </Helmet>
      <Header>
        <Picture>
          <Avatar size="lg" url={avatar} />
        </Picture>
        <Profile>
          <Info>
            <Username>
              {username}
            </Username>
            {isSelf ? <EButton onClick={logOut} text="로그아웃" /> : <EFollowButton id={id} isFollowing={isFollowing} />}
          </Info>
          <Counts>
            <Count>
              게시물 <FatText text={String(postsCount)} />
            </Count>
            <Count>
              팔로워 <FatText text={String(followersCount)} />
            </Count>
            <Count>
              팔로우 <FatText text={String(followingCount)} />
            </Count>
          </Counts>
          <FullName text={fullName} />
          <Bio>
            {bio}
          </Bio>
        </Profile>
      </Header>
      <Posts>
        {posts &&
          posts.map(post =>
            <SquarePost
              key={post.id}
              id={post.user.id}
              location={post.location}
              caption={post.caption}
              isSelf={isSelf}
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
    </>
  );
};

export default ProfilePresenter;
