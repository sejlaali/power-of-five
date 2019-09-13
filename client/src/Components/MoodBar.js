import React, {Component} from 'react'
import "./SubmitMood.css"
class MoodBar extends Component {
  constructor(props) {
    super()
  }
    render() {
      let active = this.props.clicked ? "active" : null
        return (
        <div className="select-options">
          <div style={{fontSize: "25px", margin: "5px"}}>😕</div>
          <option className={active} onClick={(e) => this.props.selectMood(e)} style={{backgroundColor: "#26457B"}} value="0"></option>
          <option onClick={(e) => this.props.selectMood(e)} style={{backgroundColor: "#676AEB"}} value="1"></option>
          <option onClick={(e) => this.props.selectMood(e)} style={{backgroundColor: "#13d128"}} value="2"></option>
         <option onClick={(e) => this.props.selectMood(e)} style={{backgroundColor: "#F78547"}} value="4"></option>
          <option onClick={(e) => this.props.selectMood(e)} style={{backgroundColor: "#FFF01A"}} value="3"></option>
          <div style={{fontSize: "25px", margin: "5px"}}> 😃</div>
        </div>
         );
    }
}

export default MoodBar;
