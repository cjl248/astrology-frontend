import React from "react";
import adapter from "../services/api";
import { connect } from "react-redux";
import { login } from "../actions/index";

class AllHoroscopes extends React.Component {
  constructor() {
    super();
    this.state = {
      horoscopes: []
    };
  }
  componentDidMount() {
    // adapter.horoscopes
  }

  render() {
    console.log(this.state);
    return <div>all horoscopes</div>;
  }
}

export default connect(null, { login })(AllHoroscopes);
