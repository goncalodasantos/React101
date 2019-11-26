import React from "react";
import Navbar from "components/Navbar";
import CatsScene from "scenes/CatsScene";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar>
        {
          <header className="header">
            <span className="big-boy">ssdass2</span>
          </header>
        }
      </Navbar>
      <CatsScene />
    </div>
  );
}

export default App;
