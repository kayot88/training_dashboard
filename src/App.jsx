import React from "react";
import { Route, Switch } from "react-router-dom";
import CoolFeatures from "./pages/CoolFeatures";
import CssTricks from "./pages/CssTricks";
import Hooks from "./pages/Hooks";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/csstricks">
        <CssTricks />
      </Route>
      <Route path="/coolfeatures">
        <CoolFeatures />
      </Route>
      <Route path="/hooks">
        <Hooks />
      </Route>
    </Switch>
  );
}

export default App;
