import { gql } from "apollo-boost";

export const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      id
      avatar
      username
      fullName
      isFollowing
      isSelf
      bio
      followingCount
      followersCount
      postsCount
      posts {
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
  }
`;

export const LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;
