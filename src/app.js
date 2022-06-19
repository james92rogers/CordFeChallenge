import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import SideNavBar from "./components/sidenavbar";

import Discover from "./pages/discover";

import "./css/app.scss";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  window.addEventListener("resize", function (event) {
    setScreenWidth(window.screen.width);
  });

  useEffect(() => {
    screenWidth < 600 ? setIsOpen(false) : setIsOpen(true);
  }, [screenWidth]);

  const closeSideNav = () => {
    if (isOpen && screenWidth < 600) setIsOpen(false);
  };

  return (
    <Router>
      <PageContainer>
        <SideNavBar
          isOpen={isOpen}
          screenWidth={screenWidth}
          closeSideNav={closeSideNav}
        />
        <ContentWrapper onClick={closeSideNav}>
          <Switch>
            <Route path="/discover">
              <Discover setIsOpen={setIsOpen} screenWidth={screenWidth} />
            </Route>
          </Switch>
        </ContentWrapper>
      </PageContainer>
    </Router>
  );
}

export default App;

const ContentWrapper = styled.main`
  padding-left: 280px;

  @media screen and (max-width: 600px) {
    padding-left: 0;
  }
`;

const PageContainer = styled.main`
  overflow-x: hidden;

  .hidden {
    display: none;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    overflow: visible;
  }
`;
