import React from "react";
import styled from "styled-components";
import FatText from "../FatText";
import Avatar from "../Avatar";
import { HeartFull, HeartEmpty, Comment as CommentIcon } from "../Icons";
import Slider from "../Slider";
import { Link } from "react-router-dom";
import Timestamp from "../Timestamp";
import AddComment from "../AddComment";
import FollowButton from "../../Components/FollowButton";

const Post = styled.article`
  ${props => props.theme.whiteBox};
  ${props =>
    props.postView
      ? `
        max-width: 935px; border: 0; border-radius: 0; display: flex;
        ${UserColumn} {
          margin-left: 14px;
        }
        ${EAddComment} {
          position: absolute; bottom: 0; right: 0; max-width: 335px;
        };
        ${Header} {
          position: absolute; height: 72px; top: 0; right: 0; max-width: 335px; width: 100%; border-bottom: 1px solid #eee;
        }
        ${Meta} {
          position: absolute; padding: 2px 0px 0px; top: 72px; height: 457px; display: flex; flex-flow: column nowrap; right: 0; max-width: 335px; width: 100%; background-color: #fff;
        }
        ${Buttons} {
          order: 2; border-top: 1px solid #eee; padding: 0px 16px;
        }
        ${Comments} {
          order: 1; height: 370px; overflow-y: auto; margin-bottom: 5px; padding: 0px 16px; margin-top: 15px;
        }
        ${Comment} {
          display:flex;
          flex-flow: row nowrap;
          margin-bottom: 12px;
          white-space: break-spaces;
        }
        ${Avatar} {
          flex: 0 0 30px;
        }
        ${Files} {
          max-width: 600px;
          height: 600px;
          margin-right: 335px;
        }
        ${LikeCount} {
          order: 3; padding: 0px 16px;
        }
        ${CreatedAt} {
          order: 4; padding: 0px 16px;
        }
        `
      : `max-width: 614px`};
  width: 100%;
  margin-bottom: 25px;
  position: relative;
  a {
    color: inherit;
  }
`;

const Header = styled.header`
  padding: 16px;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #fff;
`;

const UserColumn = styled(Link)`
  margin-left: 10px; 
  color:#333;
`;

const Location = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const Meta = styled.div`padding: 2px 16px 0px;`;

const Buttons = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-flow: row nowrap;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  transition: transform .25s linear;
  &:first-child {
    margin-left: -8px;
  }
  &:active {
    transform: scale(1.5);
  }
`;

const Comments = styled.ul`margin-top: 10px;`;

const Comment = styled.li`
  margin-bottom: 3px;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  span {
    margin-right: 5px;
  }
`;

const Caption = styled.div`
  margin: 10px 0px 4px;
  span {
    margin-right: 5px;
  }
`;

const Files = styled.div`
  width: 612px;
  height: 612px;
`;

const File = styled.div`
  max-width: 100%;
  width: 100%;
  height: 100%;
  top: 0;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  transition: opacity .5s linear;
`;

const CommentsAll = styled.span`
  color: #acacac;
  display: block;
  margin-bottom: 7px;
  cursor: pointer;
`;

const LikeCount = styled(FatText)``;

const CreatedAt = styled(Timestamp)``;

const CommentText = styled.div`
  word-break: break-all;
  line-height: 18px;
  margin-left: 14px;
`;

const EAvatar = styled(Avatar)`flex: 0 0 30px;`;

const EAddComment = styled(AddComment)``;

const EFollowButton = styled(FollowButton)`
  background-color: #fff;
  border: 0;

  padding: 0px 3px;
  height: 14px;
  ${props => (props.isFollowing ? `color: #333;` : `color: ${props.theme.blueColor}`)};
`;

const Username = styled.div`
  display: flex;
  align-items: center;
`;

const FollowButtonWrapper = styled.div`margin-left: 5px;`;

export default ({
  user: { username, avatar },
  isSelf,
  id,
  isFollowing,
  location,
  files,
  isLiked,
  likeCount,
  createdAt,
  newComment,
  toggleLike,
  onSubmit,
  comments,
  caption,
  postView,
  onClick,
  selfComments
}) =>
  <Post postView={postView}>
    <Header>
      <Avatar size="sm" url={avatar} />
      <UserColumn to={`/${username}`}>
        <Username>
          <FatText text={username} />
          {postView &&
            !isSelf &&
            <FollowButtonWrapper>
              • <EFollowButton id={id} isFollowing={isFollowing} />
            </FollowButtonWrapper>}
        </Username>
        <Location>
          {location}
        </Location>
      </UserColumn>
    </Header>
    <Files>
      {files.length >= 2 ? <Slider files={files} /> : <File src={files[0].url} />}
    </Files>
    <Meta>
      <Buttons>
        <Button onClick={toggleLike}>
          {isLiked ? <HeartFull /> : <HeartEmpty />}
        </Button>
        <Button onClick={!postView && onClick}>
          <CommentIcon />
        </Button>
      </Buttons>
      <LikeCount text={`좋아요 ${likeCount}개`} />
      {!postView &&
        caption &&
        <Caption>
          <Link to={`/${username}`}>
            <FatText text={username} />
          </Link>
          {caption}
        </Caption>}
      {comments &&
        <Comments>
          {!postView &&
            comments.length > 2 &&
            <CommentsAll onClick={onClick}>
              {`댓글 ${comments.length}개 모두 보기`}
            </CommentsAll>}
          {postView &&
            caption &&
            <Comment>
              <EAvatar size="sm" url={avatar} />
              <CommentText>
                <Link to={`/${username}`}>
                  <FatText text={username} />
                </Link>
                {caption}
                <Timestamp createdAt={createdAt} />
              </CommentText>
            </Comment>}
          {!postView
            ? comments.slice(0, 2).map(comment =>
                <Comment key={comment.id}>
                  <Link to={`/${username}`}>
                    <FatText text={comment.user.username} />
                  </Link>
                  {comment.text}
                </Comment>
              )
            : comments.map(comment =>
                <Comment key={comment.id}>
                  <EAvatar size="sm" url={comment.user.avatar} />
                  <CommentText>
                    <Link to={`/${username}`}>
                      <FatText text={comment.user.username} />
                    </Link>
                    {comment.text}
                    <Timestamp createdAt={comment.createdAt} />
                  </CommentText>
                </Comment>
              )}
          {!postView
            ? selfComments.map(comment =>
                <Comment key={comment.id}>
                  <Link to={`/${username}`}>
                    <FatText text={comment.user.username} />
                  </Link>
                  {comment.text}
                </Comment>
              )
            : selfComments.map(comment =>
                <Comment key={comment.id}>
                  <EAvatar size="sm" url={comment.user.avatar} />
                  <CommentText>
                    <Link to={`/${username}`}>
                      <FatText text={comment.user.username} />
                    </Link>
                    {comment.text}
                    <Timestamp createdAt={Date.now()} />
                  </CommentText>
                </Comment>
              )}
        </Comments>}
      <CreatedAt createdAt={createdAt} />
    </Meta>
    <EAddComment
      placeholder="댓글 달기..."
      value={newComment.value}
      onChange={newComment.onChange}
      onSubmit={onSubmit}
    />
  </Post>;
