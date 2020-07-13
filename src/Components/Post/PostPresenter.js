import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-autosize-textarea";
import FatText from "../FatText";
import Avatar from "../Avatar";
import { HeartFull, HeartEmpty, Comment as CommentIcon } from "../Icons";
import Slider from "../Slider";

const Post = styled.article`
  ${props => props.theme.whiteBox};
  width: 100%;
  max-width: 614px;
  margin-bottom: 25px;
`;

const Header = styled.header`
  height: 60px;
  padding: 16px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`margin-left: 10px;`;

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
  justify-contents: center;
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

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 10px;
  margin-top: 10px;
`;

const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  margin: 10px 0px;
  font: inherit;
  border-top: ${props => props.theme.lightBoxColor} 1px solid;
  &:focus {
    outline: none;
  }
  padding: 20px 15px;
  margin: 15px 0px 0px;
`;

const Comments = styled.ul`margin-top: 10px;`;

const Comment = styled.li`
  margin-bottom: 7px;
  span {
    margin-right: 5px;
  }
`;

export default ({
  user: { username, avatar },
  location,
  files,
  isLiked,
  likeCount,
  createdAt,
  newComment,
  toggleLike,
  onKeyPress,
  comments,
  selfComments
}) =>
  <Post>
    <Header>
      <Avatar size="sm" url={avatar} />
      <UserColumn>
        <FatText text={username} />
        <Location>
          {location}
        </Location>
      </UserColumn>
    </Header>
    <Slider files={files} />
    <Meta>
      <Buttons>
        <Button onClick={toggleLike}>
          {isLiked ? <HeartFull /> : <HeartEmpty />}
        </Button>
        <Button>
          <CommentIcon />
        </Button>
      </Buttons>
      <FatText text={`좋아요 ${likeCount}개`} />
      {comments &&
        <Comments>
          {comments.map(comment =>
            <Comment key={comment.id}>
              <FatText text={comment.user.username} />
              {comment.text}
            </Comment>
          )}
          {selfComments.map(comment =>
            <Comment key={comment.id}>
              <FatText text={comment.user.username} />
              {comment.text}
            </Comment>
          )}
        </Comments>}
      <Timestamp>
        {createdAt}
      </Timestamp>
    </Meta>
    <Textarea
      placeholder="댓글 달기..."
      value={newComment.value}
      onChange={newComment.onChange}
      onKeyPress={onKeyPress}
    />
  </Post>;
