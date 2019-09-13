import React, { Component } from "react";
import { Link } from "react-router-dom";
import './SubmitMood.css';
import MoodBar from "./MoodBar.js"

class SubmitMood extends Component {
  constructor(props) {
    super();
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
        <MoodBar moodObj = {this.props.moodObj} clicked={this.props.clicked} selectMood={this.props.selectMood}/>
        <Link className="add-mood" to="/submit_text">
          <button className="add-mood-button">Next</button>
        </Link>
      </div>
    );
  }
}

export default SubmitMood;
