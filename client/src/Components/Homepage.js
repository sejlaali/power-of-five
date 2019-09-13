import React, { Component } from "react";
import { Link } from "react-router-dom";
import BubbleChart from "@weknow/react-bubble-chart-d3";
import './Homepage.css'
import MoodBar from './MoodBar'
import {getMoods} from '../services/api.js'

class Homepage extends Component {
    constructor() {
        super()
            this.state = {
                date: new Date().toDateString(),
                data: [{ label: "", value: 1, color: "#26457B", category:0 },
                       { label: "", value: 1, color: "#676AEB", category:1 },
                       { label: "", value: 1, color: "#13d128", category:2 },
                       { label: "", value: 1, color: "#FFF01A", category:3 },
                       { label: "", value: 1, color: "#F78547", category:4 }]
              }
            }

  async componentDidMount() {
    // in prod needs to only pull from today. for presentation purposes we know limits of data
    const moods = await getMoods();
    const data = this.state.data;
    moods.forEach(mood => {
      data.forEach(data => {
        if (mood.id == data.category) {
          data.value++
        }
      })
    })
    this.setState(prevState => {
      return(
        {...prevState,
        data,}      )
    })
  }

  render() {
    let addMood = this.props.isSignedIn ? <Link className="add-mood" to="/submit"><button className="add-mood-button">Add your Mood</button>
    </Link> : <Link className="add-mood" to="/login">
          <button className="add-mood-button">Add your Mood</button>
        </Link>

    return (
      <div className="homepage">
        <h1 className="title">Collective Mood</h1>
        <h2>{this.state.date}</h2>
        <BubbleChart
          graph={{
            zoom: 1.0,
          }}
          showLegend={false}
          width={340}
          height={340}
          overflow={false}
          padding={10}
          fontFamily="Montserrat"
          data={this.state.data}
        />
      <MoodBar selectMood={this.props.selectMood} />
        {addMood}
      </div>
    );
  }
}
  export default Homepage;
