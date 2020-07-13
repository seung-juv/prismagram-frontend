import React from "react";
import { Route, Switch } from "react-router-dom";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";
import Search from "../Routes/Search";
import Profile from "../Routes/Profile";
import Explore from "../Routes/Explore";

const LoggedInRoutes = () =>
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/explore" component={Explore} />
    <Route path="/search" component={Search} />
    <Route path="/:username" component={Profile} />
  </Switch>;

const LoggedOutRoutes = () =>
  <Switch>
    <Route exact path="/" component={Auth} />
  </Switch>;

const AppRouter = ({ isLoggedIn }) =>
  <Switch>
    {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
  </Switch>;

export default AppRouter;
