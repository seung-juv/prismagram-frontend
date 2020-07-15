import { combineReducers } from "redux";

const initialState = {
  isFollowing: false
};

const isFollow = (state = initialState, action) => {
  switch (action.type) {
    case "IS_FOLLOW":
      return { ...state, isFollowing: (state.isFollowing = true) };
    case "IS_UNFOLLOW":
      return { ...state, isFollowing: (state.isFollowing = false) };
    case "IS_FOLLOW_SUCCESS":
      return { ...state };
    case "IS_FOLLOW_FAIL":
      return { ...state };
    default:
      return { ...state };
  }
};

const reducers = combineReducers({
  isFollow
});

export default reducers;
