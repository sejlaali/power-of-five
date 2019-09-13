import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PersonalHistory.css"
import DatePicker from 'react-date-picker'

class PersonalHistory extends Component {
  constructor(props) {
    super();

    this.state = {
      name: null,
      moodsArray: null,
    };
  }

  render() {
    return (
      <div className="personal-history">
        <h2>Mood History</h2>
        <div className="personal-collective">
      <p>Personal</p>
        <p>Collective</p>
        </div>
      <div id="history-container">
      <p>Week of</p>
      <p>Sept 29, 2019</p>
      <div className="weekdays">
      <div>
        <option style={{backgroundColor: "#26457B"}} value="0"></option>
          <option style={{backgroundColor: "#13d128"}} value="1"></option>
          <option style={{backgroundColor: "#FFF01A"}} value="2"></option>
         <option style={{backgroundColor: "#FFF01A"}} value="4"></option>
          <option style={{backgroundColor: "#13d128"}} value="3"></option></div>
      <div>
        <p>M</p>
        <p>T</p>
        <p>W</p>
        <p>TR</p>
        <p>F</p>
      </div>
      </div>
  </div>
  <div className="select-options-history">
  <div style={{fontSize: "25px", margin: "5px"}}>😕</div>
  <option style={{backgroundColor: "#26457B"}} value="0"></option>
          <option style={{backgroundColor: "#676AEB"}} value="1"></option>
          <option style={{backgroundColor: "#13d128"}} value="2"></option>
         <option style={{backgroundColor: "#F78547"}} value="4"></option>
          <option style={{backgroundColor: "#FFF01A"}} value="3"></option>
          <div style={{fontSize: "25px", margin: "5px"}}> 😃</div>

  </div>
              </div>
    );
  }
}

export default PersonalHistory;
