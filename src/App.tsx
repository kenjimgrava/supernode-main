import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import WhitePaper from "./pages/white-paper/white-paper";
import ContactUs from "./pages/contact-us/contact-us";
import Header from "./components/Headers/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="absolute">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/white-paper" exact>
              <WhitePaper />
            </Route>
            <Route path="/contact-us" exact>
              <ContactUs />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
