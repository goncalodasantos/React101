import React from "react";
import axios from "axios";
import "./styles.css";
import styled from "styled-components";
import FavoriteContext from "contexts/favoriteContext";

class DogsScene extends React.Component {
  state = {
    factList: []
  };

  callAPI = () => {
    const self = this;
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then(function(response) {
        const data = Object.keys(response.data.message);
        const randomNumber = Math.floor(Math.random() * (data.length - 5));
        self.setState({ factList: data.slice(randomNumber, randomNumber + 5) });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };

  componentDidMount() {
    this.callAPI();
  }

  render() {
    const { factList } = this.state;
    console.log(this);

    return (
      <div className="wrapper">
        <CustomButton onClick={() => this.callAPI()}>
          Dude, renderize other 5, plz
        </CustomButton>
        <FavoriteContext.Consumer>
          {favoriteBreed =>
            factList.map((el, index) => (
              <span
                key={`breed${index}`}
                onClick={() => favoriteBreed.action(el)}
              >
                {el}
              </span>
            ))
          }
        </FavoriteContext.Consumer>
      </div>
    );
  }
}

export default DogsScene;

const CustomButton = styled.button`
  padding: 25px;
`;
