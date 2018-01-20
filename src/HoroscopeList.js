import React from "react";
import { connect } from "react-redux";

const HoroscopeList = props => {
  function listHoroscopes() {
    return props.horoscopes.map(horoscope => {
      return (
        <div className="col-lg-12">
          <div className="col-lg-6 col-lg-offset-3 well">
            <p>{horoscope.content}</p>
          </div>
        </div>
      );
    });
  }

  console.log("HLIST", props);
  if (props.horoscopes.length > 0) {
    return <div>{listHoroscopes()}</div>;
  } else {
    return <div>loading</div>;
  }
};

function mapStateToProps(state) {
  console.log("in map state to props");
  return { horoscopes: state.horoscopes.content };
}

export default connect(mapStateToProps)(HoroscopeList);
