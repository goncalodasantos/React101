import React from "react";
import Navbar from "components/Navbar";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar>
        {() => (
          <div className="header">
            <span className="big-boy">ssdass2</span>
          </div>
        )}
      </Navbar>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and savessx to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
