import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./SignUpLogIn.css"
class SignUpLogIn extends Component {
  constructor(props) {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      signUp: false
    };
  }

  signUp = e => {
    e.preventDefault();
    this.props.signUp(
      this.state.name,
      this.state.email,
      this.state.password,
      this.state.password_confirmation
    );
  };

  signIn = e => {
    e.preventDefault();
    this.props.signIn(this.state.email, this.state.password);
  };

  handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  SignUpPage = () => {
    this.setState({
      signUp: true
    });
  };

  render() {
    const formToDisplay =
      this.state.signUp && !this.props.isSignedIn ? (
        <div className="input-container">
          <input
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Name"
            label="Name"
          />

          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            placeholder="Enter email"
            label="Email"
          />

          <input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
            label="password"
          />
          <button className="submit" onClick={this.signUp} variant="primary" type="submit">
            Submit
          </button>
        </div>
      ) : (
        <div className="input-container">
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            placeholder="EMAIL"
            label="Email"
          />
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            placeholder="PASSWORD"
            label="password"
          />
        <button className="submit" onClick={this.signIn} variant="primary" type="submit">
            Submit
          </button>
          <p>
            Don't have an account?
            </p>
            <span
              style={{ color: "#C74FC7", fontFamily: "Avenir", textDecoration: "none" }}
              onClick={this.SignUpPage}
            >
              Sign Up Here
            </span>
        </div>
      );

    return (
      <div>
        <h2 className="login-title">Mind</h2>
        <div className="login-title-bars">
          <option style={{backgroundColor: "#26457B"}} value="1"></option>
          <option style={{backgroundColor: "#676AEB"}} value="2"></option>
          <option style={{backgroundColor: "#13d128"}} value="3"></option>
          <option style={{backgroundColor: "#FFF01A"}} value="4"></option>
          <option style={{backgroundColor: "#F78547"}} value="5"></option>
        </div>
       <h2 className="login-title">Matter</h2>

        {this.props.isSignedIn ? (
          <div>
            <Redirect to="/submit" />
          </div>
        ) : (
          formToDisplay
        )}
      </div>
    );
  }
}

export default SignUpLogIn;
