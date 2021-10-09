import React from "react";
import PropTypes from "prop-types";

function Bar(props) {
  const { percentage } = props;
  const barStyle = {
    background:
      "linear-gradient(180deg, rgba(56,149,95,.25), rgba(102,210,234,.25))",
    width: "30px",
    height: "70.74px",
    borderRadius: "2px",
    display: "flex",
    alignItems: "flex-end"   // align the inner bar to the end of the the outer box
  };


  const innerBar = {
    background:
      "linear-gradient(180deg, rgba(56,149,95,1), rgba(102,210,234,0.5))",
    opacity: "100 !important",
    height: `${percentage}%`,
    width: "100%",
    borderRadius: "2px"
  };

  return (
    <div style={barStyle}>
      <div style={innerBar}></div>
    </div>
  );
}

Bar.propTypes = {
  percentage: PropTypes.number.isRequired
};

function Histogram(props) {
  
  const { bars, barCount } = props;

  const divStyle = {
    display: "flex",
    justifyContent: "space-around"
  };

  return (
    <div style={divStyle}>
     
      {bars.map((b,i) => i <= barCount ? <Bar  percentage={b}/> : "")}
     
    </div>
  );
}

Histogram.propTypes = {
  bars: PropTypes.array.isRequired,
  barCount: PropTypes.number.isRequired
};

export default Histogram;
