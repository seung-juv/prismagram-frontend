import React from "react";
import styled from "styled-components";

const getSize = size => {
  let number;
  if (size === "sm") {
    number = 30;
  } else if (size === "md") {
    number = 50;
  } else if (size === "lg") {
    number = 150;
  }
  return `
        width:${number}px;
        height:${number}px;
        `;
};

const Container = styled.div`
  ${props => getSize(props.size)}
  background-image:url(${props => props.url});
  background-size:cover;
  border-radius:50%;
`;

const Avatar = ({
  size = "sm",
  url = "https://instagram.fsaw2-2.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fsaw2-2.fna.fbcdn.net&_nc_ohc=k9G3x77cGJoAX9b-R4t&oh=8ab87cafff6ae9827eda1084e24d0391&oe=5F37450F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2",
  className
}) => <Container size={size} className={className} url={url} />;

export default Avatar;
