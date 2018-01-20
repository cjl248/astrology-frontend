import React, { Component } from "react";
// import { Navbar } from "react-bootstrap";
import HoroscopeList from "./HoroscopeList";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/userActions";
import { getHoroscopes } from "./actions/horoscopeActions";
// import * as actions from "./actions";

export class App extends Component {
  componentWillMount() {
    console.log("in CDM");
    const token = localStorage.getItem("token");
    if (token) {
      this.props.getCurrentUser();
    }
  }

  componentDidMount() {
    if (this.props.horoscopes.length === 0) {
      this.props.getHoroscopes(this.props.history);
    }
  }
  render() {
    console.log("in render", this.props);
    // return (
    //   <div className="App">
    //     {/* <Route exact path="/" render={(props) => <MyComponent {...props} myProp={this.state.myprop}/>} /> */}
    //     {/* <Route exact path="/" component={MyComponent}/> */}
    //
    //     <HoroscopeList />
    //     {/* <Signup /> */}
    //     {/* <Login /> */}
    //     {/* <Navbar /> */}
    //   </div>
    // );
    return (
      <div className="App">
        <Navbar name={this.props.name} />
        <Route exact path="/" render={() => <Login />} />
        <Route exact path="/horoscopes" render={() => <HoroscopeList />} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("in map state to props");
  return { horoscopes: state.horoscopes.content };
}

// export const WrapperApp = App;
export default withRouter(
  connect(mapStateToProps, {
    getCurrentUser,
    getHoroscopes
  })(App)
);
