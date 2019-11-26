import React from "react";
import "./styles.css";

class Navbar extends React.Component {
  render() {
    console.log(this.props);
    return this.props.children();
  }
}

export default Navbar;
