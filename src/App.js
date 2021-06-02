import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import MobileNav from "./components/MobileNav";
import Home from "./components/Home";
import Research from "./components/Research";
import Publication from "./components/Publication";
import Member from "./components/Member";
import Gole from "./components/Gole";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [sidebar, setSidebar] = useState("0");
  return (
    <Router>
      <div className="App">
        <Header sidebar={sidebar} setSidebar={setSidebar} />
        <MobileNav sidebar={sidebar} setSidebar={setSidebar} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/research">
            <Research />
          </Route>
          <Route path="/publication">
            <Publication />
          </Route>
          <Route path="/member">
            <Member />
          </Route>
          <Route path="/gole">
            <Gole />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
