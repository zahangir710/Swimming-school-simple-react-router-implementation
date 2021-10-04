import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home/Home";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Instructors from "./components/Instructors/Instructors";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/instructors">
            <Instructors></Instructors>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
