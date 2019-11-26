import React from "react";
import axios from "axios";
import "./styles.css";

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
    console.log("dogs");
    return (
      <div className="wrapper">
        <button onClick={() => this.callAPI()}>
          Dude, renderize other 5, plz
        </button>
        {factList.map((el, index) => (
          <span key={`breed${index}`}>{el}</span>
        ))}
      </div>
    );
  }
}

export default DogsScene;
