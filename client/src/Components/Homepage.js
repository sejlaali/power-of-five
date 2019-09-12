import React, { Component } from "react";
import { Link } from "react-router-dom";
import BubbleChart from "@weknow/react-bubble-chart-d3";
import './Homepage.css'

class Homepage extends Component {
    constructor() {
        super() 
            this.state = {
                date: new Date().toDateString()
            }
        }
    
  render() {
      let date = new Date()
    return (
      <div className="homepage">
        <h1 className="title">Collective Mood</h1>
        <h2>{this.state.date}</h2>
        <BubbleChart
          graph={{
            zoom: .99,
            offsetX: -0.05,
            offsetY: -0.01
          }}
          showLegend={false}
          width={400}
          height={400}
          overflow={false}
          padding={0}
          fontFamily="Montserrat"
          data={[
            { label: "CRM", value: 3, color: "#26457B" },
            { label: "API", value: 1, color: "#676AEB" },
            { label: "Data", value: 3 , color: "#13d128"},
            { label: "Commerce", value: 1, color: "#FFF01A" },
            { label: "AI", value: 2, color: "#F78547" }
          ]}
        />
        <Link to="/login">
          <button>ADD MOOD/LOGIN </button>
        </Link>
      </div>
    );
  }
 }

export default Homepage;
