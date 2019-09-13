import React, { Component } from "react";
import { Link } from "react-router-dom";
import './SubmitMoodText.css';

class SubmitMoodText extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <h1>Private Journal</h1>
        <h2>date box</h2>
        <h3> mood color </h3>
        <textarea
          name="text"
          onChange={this.props.handleChange}
          value={this.props.text}>
        </textarea>
        <button onClick={(e) => this.props.submitMoodFunc(e)}>Save</button>
      </div>
    );
  }
}

export default SubmitMoodText;
