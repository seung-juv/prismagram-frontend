export const isFollowing = status => {
  if (status) {
    return {
      type: "IS_FOLLOW"
    };
  } else {
    return {
      type: "IS_UNFOLLOW"
    };
  }
};

export const isFollowSuccess = data => {
  return {
    type: "IS_FOLLOW_SUCCESS",
    data
  };
};

export const isFollowingFail = () => {
  return {
    type: "IS_FOLLOW_FAIL"
  };
};
