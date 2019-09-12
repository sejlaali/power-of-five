import React, { Component } from "react";
import { Link } from "react-router-dom";
import './SubmitMood.css';
import MoodBar from "./MoodBar.js"


class SubmitMood extends Component {
  constructor(props) {
    super();

    this.state = {
      number: null,
      text: null,
    };
  }

  render() {
    return (
      <div className="submit-mood">
        <h1 className="submit-header">Good Morning!</h1>
        <h2 className="submit-header">How are you feeling today?</h2>
        <div className="png-container">
          <img src={require('../images/Group.png')} alt="woman" />
          <img src={require('../images/Humaaan.png')} alt="man" />
        </div>
        <MoodBar />
        <Link className="add-mood" to="/login">
          <button className="add-mood-button">Submit</button>
        </Link>
      </div>
    );
  }
}

export default SubmitMood;
