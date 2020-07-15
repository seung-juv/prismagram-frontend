import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Input from "./Input";
import useInput from "../Hooks/useInput";
import { Compass, Home, Logo, Search } from "./Icons";
import { useQuery } from "react-apollo-hooks";
import { ME } from "../ShardQueries";
import Avatar from "./Avatar";

const Header = styled.header`
  width: 100%;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  border-bottom: ${props => props.theme.boxBorder};
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 0px;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  justify-content: center;
`;

const HeaderColumn = styled.div`
  width: 33%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-width: 125px;
  width: 215px;
  &:first-child {
    justify-content: flex-start;
  }
  &:last-child {
    justify-content: flex-end;
  }
`;

const SearchForm = styled.form`
  position: relative;
  width: 100%;
`;

const SearchIcon = styled.span`
  position: absolute;
  pointer-events: none;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  display: flex;
  align-items: center;
  svg {
    margin-left: 55px;
    opacity: .25;
  }
`;

const SearchInput = styled(Input)`
  background-color: ${props => props.theme.bgColor};
  padding: 5px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 3px;
  height: auto;
  text-align: center;
  max-width: 215px;
  width: 100%;
  &::placeholder {
    opacity: 0.8;
    font-weight: 200;
  }
  &:focus {
    text-align: left;
    font-weight: 500;
    padding: 5px 10px 5px 26px;
  }
`;

const HeaderLink = styled(Link)`
  width: 22px;
  height: 22px;
  &:not(:last-child) {
    margin-right: 22px;
  }
`;

const EAvatar = styled(Avatar)`
  width: 22px;
  height: 22px;
`;

export default withRouter(({ history }) => {
  const search = useInput("");
  const { data, loading } = useQuery(ME);
  const onSearchSubmit = e => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };
  return (
    !loading &&
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <Link to="/">
            <Logo />
          </Link>
        </HeaderColumn>
        <HeaderColumn>
          <SearchForm onSubmit={onSearchSubmit}>
            <SearchIcon>
              <Search size={12} />
            </SearchIcon>
            <SearchInput value={search.value} onChange={search.onChange} placeholder="검색" />
          </SearchForm>
        </HeaderColumn>
        <HeaderColumn>
          <HeaderLink to="/">
            <Home size={22} />
          </HeaderLink>
          <HeaderLink to="/explore">
            <Compass size={22} />
          </HeaderLink>
          <HeaderLink to={data.me ? data.me.username : "/#"}>
            <EAvatar url={data.me.avatar} size="sm" />
          </HeaderLink>
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
});
