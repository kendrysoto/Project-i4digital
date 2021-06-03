import React, { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import Album from "./Album";
import Publication from "./Publication";

const Main = (): ReactElement => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/User" component={User} />
        <Route path="/Album" component={Album} />
        <Route path="/Publication" component={Publication} />
      </Switch>
    </div>
  );
};

export default Main;
