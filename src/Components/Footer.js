import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  margin: 50px 0;
`;

const List = styled.ul`display: flex;`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const Link = styled.a`color: ${props => props.theme.darkBlueColor};`;

const Copyright = styled.span`color: ${props => props.theme.darkgreyColor};`;

export default () =>
  <Footer>
    <List>
      <ListItem>
        <Link href="#">소개</Link>
      </ListItem>
      <ListItem>
        <Link href="#">도움말</Link>
      </ListItem>
      <ListItem>
        <Link href="#">홍보</Link>
      </ListItem>
      <ListItem>
        <Link href="#">센터</Link>
      </ListItem>
      <ListItem>
        <Link href="#">API</Link>
      </ListItem>
      <ListItem>
        <Link href="#">채용</Link>
      </ListItem>
      <ListItem>
        <Link href="#">정보</Link>
      </ListItem>
      <ListItem>
        <Link href="#">개인정보처리방침</Link>
      </ListItem>
      <ListItem>
        <Link href="#">약관</Link>
      </ListItem>
      <ListItem>
        <Link href="#">위치</Link>
      </ListItem>
      <ListItem>
        <Link href="#">인기</Link>
      </ListItem>
      <ListItem>
        <Link href="#">계정</Link>
      </ListItem>
      <ListItem>
        <Link href="#">해시</Link>
      </ListItem>
      <ListItem>
        <Link href="#">태그</Link>
      </ListItem>
      <ListItem>
        <Link href="#">언어</Link>
      </ListItem>
    </List>
    <Copyright>
      Instaclone {new Date().getFullYear()} &copy;
    </Copyright>
  </Footer>;
