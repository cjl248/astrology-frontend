import React from "react";
import api from "../services/api";
import { connect } from "react-redux";
import { login } from "../actions/index";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
        name: "",
        password: ""
      }
    };
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = e => {
    // console.log(this.state);
    e.preventDefault();
    this.props.login(this.state.fields.name, this.state.fields.password);
    // api.auth
    //   .login(this.state.fields.name, this.state.fields.password)
    //   .then(res => {
    //     if (res.error) {
    //       this.setState({ error: true });
    //     } else {
    //       localStorage.setItem("token", res.jwt);
    //       this.props.history.push("/");
    //     }
    //   });
  };

  render() {
    const { fields } = this.state;
    return (
      <div>
        {this.state.error ? <h1>Try Again</h1> : null}
        <div className="ui form">
          <form onSubmit={this.handleSubmit}>
            <div className="ui field">
              <label>Username</label>
              <input
                name="name"
                placeholder="Choose a username"
                value={fields.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="Choose a password"
                value={fields.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>When is your birthday?</label>
              <input
                name="birthday"
                type="date"
                value={fields.date}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="ui basic green button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { login })(Signup);
