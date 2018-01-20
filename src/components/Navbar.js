import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <ul>
        <div>
          <li>
            <Link to="/horoscopes">
              <i className="material-icons w3-button w3-round-large">
                Browse All Signs
              </i>
            </Link>
          </li>
        </div>
        <div>
          <li>
            <Link to="/horoscopes">
              <i>Browse All Horoscopes</i>
            </Link>
          </li>
        </div>
        <div>
          <li>Rate Past Horoscopes</li>
        </div>
        <div>
          <li>
            <Link to="/">Log Out</Link>
          </li>
        </div>
      </ul>
    );
  }
}
export default NavBar;
