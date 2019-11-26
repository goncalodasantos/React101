import React from "react";
import axios from "axios";
import "./styles.css";

class CatsScene extends React.Component {
  state = {
    factList: []
  };

  componentDidMount() {
    const self = this;
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then(function(response) {
        const data = Object.keys(response.data.message);
        self.setState({ factList: data });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }

  render() {
    const { factList } = this.state;
    return (
      <div className="wrapper">
        {factList.map(el => (
          <span key={`breed${el}`}>{el}</span>
        ))}
      </div>
    );
  }
}

export default CatsScene;
