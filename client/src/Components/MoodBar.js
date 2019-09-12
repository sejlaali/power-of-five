import React, {Component} from 'react'

class MoodBar extends Component {
    state = { 

     }

     
    render() { 
        return ( 
        <div className="select-options">
          <div style={{fontSize: "25px", margin: "5px"}}>😕</div>
          <option style={{backgroundColor: "#26457B"}} value="1"></option>
          <option style={{backgroundColor: "#676AEB"}} value="2"></option>
          <option style={{backgroundColor: "#13d128"}} value="3"></option>
          <option style={{backgroundColor: "#FFF01A"}} value="4"></option>
          <option style={{backgroundColor: "#F78547"}} value="5"></option>
          <div style={{fontSize: "25px", margin: "5px"}}> 😃</div>
        </div>
         );
    }
}
 
export default MoodBar;