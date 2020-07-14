import React from "react";
import { gql } from "apollo-boost";
import styled, { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Routes from "./Routes";
import Footer from "./Footer";
import Header from "./Header";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const RootWrapper = styled.section`
  background-color: ${props => props.theme.bgColor};
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  padding-top: 55px;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
  min-height: 80vh;
  padding-top: 30px;
  flex: 1;
`;

export default () => {
  const { data: { isLoggedIn } } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <RootWrapper>
        <GlobalStyles />
        <Router>
          <>
            {isLoggedIn && <Header />}
            <Wrapper>
              <Routes isLoggedIn={isLoggedIn} />
            </Wrapper>
            <Footer />
          </>
        </Router>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </RootWrapper>
    </ThemeProvider>
  );
};
