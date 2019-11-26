import React from "react";
import Navbar from "components/Navbar";
import DogsScene from "scenes/DogsScene";
import JustTchilling from "scenes/JustTchilling";
import "./styles.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar>
          {
            <header className="header">
              <span className="big-boy">ssdass2</span>
            </header>
          }
        </Navbar>

        <div>
          <Switch>
            <Route path="/" exact={true}>
              <DogsScene />
            </Route>
            <Route path="/tchill">
              <JustTchilling />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
