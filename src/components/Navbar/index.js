import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FavoriteContext from "contexts/favoriteContext";

class Navbar extends React.Component {
  static contextType = FavoriteContext;
  render() {
    const breedContext = this.context;
    return (
      <FlexWrapper>
        <Link to="/">Facts</Link>
        <Link to="/tchill">Tchillar pf</Link>
        {this.props.children}
        {"breed choosen: " + breedContext.value}
      </FlexWrapper>
    );
  }
}

export default Navbar;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 900px;
`;
