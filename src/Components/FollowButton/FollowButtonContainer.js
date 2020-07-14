import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { FOLLOW, UNFOLLOW } from "./FollowButtonQueries";
import FollowButtonPresenter from "./FollowButtonPresenter";

const FollowButtonContainer = ({ isFollowing, id }) => {
  const [isFollowingS, setIsFollowing] = useState(isFollowing);
  const [followMutation] = useMutation(FOLLOW, { variables: { id } });
  const [unfollowMutation] = useMutation(UNFOLLOW, { variables: { id } });

  const onClick = async () => {
    if (isFollowingS === true) {
      await unfollowMutation();
      setIsFollowing(false);
    } else {
      await setIsFollowing(true);
      followMutation(true);
    }
  };
  return <FollowButtonPresenter onClick={onClick} isFollowing={isFollowingS} />;
};

export default FollowButtonContainer;
