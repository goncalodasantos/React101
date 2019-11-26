import React, { useState } from "react";
import Navbar from "components/Navbar";
import DogsScene from "scenes/DogsScene";
import JustTchilling from "scenes/JustTchilling";
import "./styles.css";
import FavoriteContext from "contexts/favoriteContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [value, setCount] = useState("No favorite breed :(");

  return (
    <div className="App">
      <FavoriteContext.Provider
        value={{ value: value, action: value => setCount(value) }}
      >
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
      </FavoriteContext.Provider>
    </div>
  );
}

export default App;
