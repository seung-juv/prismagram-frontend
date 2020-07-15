import React from "react";
import styled from "styled-components";
import TimeAgo from "javascript-time-ago";
import ko from "javascript-time-ago/locale/ko";

TimeAgo.addLocale(ko);
const timeAgo = new TimeAgo("ko-KR");

const Timestamp = styled.div`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 10px;
  margin-top: 10px;
`;

export default ({ createdAt, className }) => {
  const date = new Date(createdAt);
  return (
    <Timestamp className={className}>
      {timeAgo.format(date)}
    </Timestamp>
  );
};
