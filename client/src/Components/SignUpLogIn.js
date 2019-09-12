import React, { Component } from "react";
import { Redirect } from "react-router-dom";

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
        <div>
          <label>Name</label>

          <input
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Name"
            label="Name"
          />
          <label>Email</label>

          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            placeholder="Enter email"
            label="Email"
          />
          <label>Password</label>

          <input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
            label="password"
          />
          <button onClick={this.signUp} variant="primary" type="submit">
            Submit
          </button>
        </div>
      ) : (
        <div>
          <label>Email</label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            placeholder="Enter email"
            label="Email"
          />
          <label>Password</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
            label="password"
          />
          <button onClick={this.signUp} variant="primary" type="submit">
            Submit
          </button>
          <p>
            Don't have an account? Sign up
            <span
              style={{ color: "#2248a1", textDecoration: "underline" }}
              onClick={this.SignUpPage}
            >
              here!
            </span>
          </p>
        </div>
      );

    return (
      <div>
        {this.props.isSignedIn ? (
          <div>
            <Redirect to="/" />
          </div>
        ) : (
          formToDisplay
        )}
      </div>
    );
  }
}

export default SignUpLogIn;
