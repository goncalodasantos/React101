import React from "react";
import "./styles.css";

class Navbar extends React.Component {
  render() {
    return this.props.children;
  }
}

export default Navbar;
