import { createTheme } from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Home from "./App/pages/Home";
import Lanch from "./App/pages/Lanch";
import Profile from "./App/pages/Profile";
import ProfileEdite from "./App/pages/ProfileEdite";
import UserProfile from "./App/pages/UserProfile";
import TokenPage from "./App/pages/TokenPage";
import NavBar from "./App/component/menu/NavBar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import ScrollToTop from "./App/component/ScrollToTop";
import SearchResult from "./App/pages/SearchResult";
import Create from "./App/pages/Create";
import NftDetails from "./App/pages/NftDetails";
import React, { useState, useEffect } from 'react';



const theme = createTheme({
  palette: {
    primary: {
      main: "#FAB33F",
    },
  },
});

function App(props) {

  
  

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router basename="/nft1/">
          <ScrollToTop>
            <NavBar />
            <Switch>
              <Route exact path="/" component={withRouter(Home)} />
              <Route exact path="/profile" component={withRouter(Profile)} />

              <Route
                exact
                path="/profileedite"
                component={withRouter(ProfileEdite)}
              />
              <Route
                exact
                path="/userprofile"
                component={withRouter(UserProfile)}
              />
              <Route exact path="/launch" component={withRouter(Lanch)} />
              <Route
                exact
                path="/search"
                component={withRouter(SearchResult)}
              />
              <Route exact path="/create" component={withRouter(Create)} />
              <Route
                exact
                path="/nftdetails"
                component={withRouter(NftDetails)}
              />
              <Route
                exact
                path="/token"
                component={withRouter(TokenPage)}
              />
            </Switch>
          </ScrollToTop>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
