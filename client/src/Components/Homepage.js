import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Homepage extends Component {
   render() {
       return (
<div>
    <Link to="/login"><button>ADD MOOD/LOGIN </button></Link>
</div>
       )
   }

}

export default Homepage;