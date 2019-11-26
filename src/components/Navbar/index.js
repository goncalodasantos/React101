import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="flex-space">
        <Link to="/">Facts</Link>
        <Link to="/tchill">Tchillar pf</Link>
        {this.props.children}
      </div>
    );
  }
}

export default Navbar;
