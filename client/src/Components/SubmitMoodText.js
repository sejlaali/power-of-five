import React, { Component } from "react";
import { Link } from "react-router-dom";
import './SubmitMoodText.css';

class SubmitMoodText extends Component {
  constructor(props) {
    super();
  }

  render() {
    let today = new Date();
    let todayArray = today.toString().split(" ");
    today = (todayArray[0] + " " + todayArray[1] + " " + todayArray[2] + ", " + todayArray[3]);

    return (
      <div className="mood-text-container">
        <h1 className="text-header">Private Journal</h1>
        <h2 className="text-header">{today}</h2>
        <div className={`mood-color ${"_"+this.props.mood.number}`}></div>
        <textarea
          className="mood-text"
          name="text"
          onChange={this.props.handleChange}
          value={this.props.mood.text}
          placeholder="This morning I woke up a bit late and missed out on the usual coffee. Felt rushed all the way through my arrival at work and was slammed with a large workload as soon as I sat down. Feeling very anxious and on edge.">
        </textarea>
        <Link className="mood-text-link" to="/">
          <button className="add-mood-button" onClick={(e) => this.props.submitMoodFunc(e)}>Save</button>
        </Link>
      </div>
    );
  }
}

export default SubmitMoodText;
