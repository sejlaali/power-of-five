import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import SignUpLogIn from "./Components/SignUpLogIn"
import axios from 'axios'
import Homepage from "./Components/Homepage"
import SubmitMood from "./Components/SubmitMood"

class App extends Component {
  constructor(){
    super()

  this.state = {
    isSignedIn: false,
  }
}

  signUp = async (name, email, password) => {
    const payload = {
      name: name,
      email: email,
      password: password
    };
    try {
      const res = await axios.post("http://localhost:3000/users", payload);
      localStorage.setItem('token', res.data)
      this.setState({isSignedIn: true});
    } catch  {
      alert("You must fill in all of the fields.");
    }
  };

  signIn = async (email, password) => {
    const payload = {
      email,
      password
    };
    try {
      const res = await axios.post("http://localhost:3000/users/login", payload);
      localStorage.setItem('token', res.data)
      this.setState({isSignedIn: true});
    } catch  {
      alert("You have entered an invalid username or password.");
    }
  };

  signOut = async e => {
    e.preventDefault();
    alert("You are logged out.");
    localStorage.clear();
    this.setState({isSignedIn: false});
  };

  render() {
    return (<div>

      <Switch>
        <Route exact="exact" path="/" component={Homepage}></Route>
        <Route exact="exact" path="/submit" component={SubmitMood}></Route>
        <Route exact="exact" path="/login" render={props => (<SignUpLogIn isSignedIn={this.state.isSignedIn} signIn={this.signIn} signUp={this.signUp}/>)}></Route>
      </Switch>
    </div>);
  }
}

export default App;
