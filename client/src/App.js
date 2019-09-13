import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import SignUpLogIn from "./Components/SignUpLogIn"
import axios from 'axios'
import Homepage from "./Components/Homepage"
import SubmitMood from "./Components/SubmitMood"
import NavBurger from "./Components/NavBurger"
import SubmitMoodText from "./Components/SubmitMoodText"
import {postMood} from "./services/api.js"
import PersonalHistory from './Components/PersonalHistory'

class App extends Component {
  constructor(props){
    super()

  this.state = {
    isSignedIn: false,
    mood: {
      number: null,
      text: null,
    },
    clicked: false
  }
  this.selectMood = this.selectMood.bind(this);
  this.submitMoodFunc = this.submitMoodFunc.bind(this);
  this.handleMoodChange = this.handleMoodChange.bind(this);
}

 componentDidMount () {
  if (localStorage.getItem('token')) {
  this.setState({
    isSignedIn: true
  }) }
  else return
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

  selectMood(e) {
    e.preventDefault();
    if (this.state.isSignedIn) {
      let mood = this.state.mood;
      mood.number = e.target.value;
      this.setState({ mood,
      clicked: !this.state.clicked 
    })
    }
  }

  handleMoodChange(e) {
    let value = e.target.value;
    let currentState = this.state.mood;
    currentState.text = value;
    this.setState(prevState => ({
      ...prevState,
      mood: currentState,
    }));
  }

  async submitMoodFunc(e) {
    const token = localStorage.getItem('token');
    await postMood(this.state.mood, token);
  }

  render() {
    return (
    <div>
      {this.state.isSignedIn ? <NavBurger signOut={this.signOut}/> : null}
      <Switch>
    <Route exact path="/personal-history" render={props => (<PersonalHistory />)}></Route>
        <Route exact="exact" path="/submit" component={props => (<SubmitMood clicked={this.state.clicked} selectMood={this.selectMood}/>)}></Route>
        <Route exact="exact" path="/" render={props => (<Homepage isSignedIn={this.state.isSignedIn} selectMood={this.selectMood} />)}></Route>
        <Route exact="exact" path="/login" render={props => (<SignUpLogIn isSignedIn={this.state.isSignedIn} signIn={this.signIn} signUp={this.signUp}/>)}></Route>
        <Route exact="exact" path="/submit_text" render={props => (<SubmitMoodText handleChange={this.handleMoodChange} submitMoodFunc={this.submitMoodFunc} mood={this.state.mood}/>)}></Route>
      </Switch>
    </div>);
  }
}

export default App;
