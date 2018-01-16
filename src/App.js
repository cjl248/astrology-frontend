import React, { Component } from "react";
import logo from "./logo.svg";
import { connect } from "react-redux";
import Login from "./components/Login";
import { setCurrentUser } from "./actions/index";
import "./App.css";

class App extends Component {
  componentWillMount() {
    console.log("in CompWill");
    const token = localStorage.getItem("token");
    if (token) {
      this.props.setCurrentUser();
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { setCurrentUser })(App);
