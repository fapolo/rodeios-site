import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Send from "./pages/Send";

export default function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/send' component={Send} />
        <Route path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  );
}
