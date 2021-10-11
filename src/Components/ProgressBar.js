import React from "react";
import PropTypes from "prop-types";

function ProgressBar(props) {
  const { percentage } = props;
  const barStyle = {
    background: "rgba(188, 156, 255, 0.2)",
    width: "100%",
    height: "13px",
    borderRadius: "2px",
    display: "flex",
    alignItems: "flex-end", // align the inner bar to the end of the the outer box
  };

  const innerBar = {
    background: "linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)",
    opacity: "100 !important",
    height: `100%`,
    width: `${percentage}%`,
    borderRadius: "2px",
  };

  return (
    <div style={barStyle}>
      <div style={innerBar}></div>
    </div>
  );
}

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default ProgressBar;
