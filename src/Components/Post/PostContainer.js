import React, { useState } from "react";
import useInput from "../../Hooks/useInput";
import PostPresenter from "./PostPresenter";
import { useMutation } from "react-apollo-hooks";
import { TOGGLE_LIKE, ADD_COMMENT } from "./PostQueries";
import { toast } from "react-toastify";
import PostView from "../PostView";

const PostContainer = ({
  id,
  user,
  files,
  likeCount,
  isLiked,
  comments,
  createdAt,
  location,
  caption,
  postView,
  isSelf,
  isFollowing,
  className
}) => {
  const [isLikedS, setIsLiked] = useState(isLiked);
  const [likeCountS, setLikeCount] = useState(likeCount);
  const [selfComments, setSelfComments] = useState([]);
  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
    variables: { postId: id }
  });
  const comment = useInput("");
  const [addCommentMutation] = useMutation(ADD_COMMENT, {
    variables: { postId: id, text: comment.value }
  });

  const toggleLike = () => {
    toggleLikeMutation();
    if (isLikedS === true) {
      setIsLiked(false);
      setLikeCount(likeCountS - 1);
    } else {
      setIsLiked(true);
      setLikeCount(likeCountS + 1);
    }
  };

  const onSubmit = async () => {
    try {
      const { data: { addComment } } = await addCommentMutation();
      setSelfComments([...selfComments, addComment]);
      comment.setValue("");
    } catch (error) {
      toast.error("Can't send comment.");
    }
  };

  const [isPostView, setIsPostView] = useState(false);
  
  const onClick = () => {
    setIsPostView(!isPostView);
  }

  return (
    <>
      <PostPresenter
        id={id}
        isSelf={isSelf}
        isFollowing={isFollowing}
        files={files}
        caption={caption}
        user={user}
        likeCount={likeCountS}
        location={location}
        isLiked={isLikedS}
        comments={comments}
        createdAt={createdAt}
        newComment={comment}
        setIsLiked={setIsLiked}
        setLikeCount={setLikeCount}
        toggleLike={toggleLike}
        onSubmit={onSubmit}
        selfComments={selfComments}
        postView={postView ? postView : false}
        className={className}
        onClick={onClick}
      />
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

export default PostContainer;
