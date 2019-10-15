import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Send from "./pages/Send";
import Show from "./pages/Show";

export default function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/rodeios/:rodeio_id' component={Show} />
        <Route path='/send' component={Send} />
        <Route path='/about' component={About} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
