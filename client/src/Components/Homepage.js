import React, { Component } from "react";
import { Link } from "react-router-dom";
import BubbleChart from "@weknow/react-bubble-chart-d3";
import './Homepage.css'
import MoodBar from './MoodBar'

class Homepage extends Component {
    constructor() {
        super() 
            this.state = {
                date: new Date().toDateString()
            }
        }
    
  render() {
    return (
      <div className="homepage">
        <h1 className="title">Collective Mood</h1>
        <h2>{this.state.date}</h2>
        <BubbleChart
          graph={{
            zoom: .99,
          }}
          showLegend={false}
          width={380}
          height={380}
          overflow={false}
          padding={10}
          fontFamily="Montserrat"
          data={[
            { label: "CRM", value: 3, color: "#26457B" },
            { label: "API", value: 1, color: "#676AEB" },
            { label: "Data", value: 4, color: "#13d128"},
            { label: "Commerce", value: 1, color: "#FFF01A" },
            { label: "AI", value: 2, color: "#F78547" }
          ]}
        />
    <MoodBar />
        <Link className="add-mood" to="/login">
          <button className="add-mood-button">Add your Mood</button>
        </Link>
      </div>
    );
  }
}
  export default Homepage;
