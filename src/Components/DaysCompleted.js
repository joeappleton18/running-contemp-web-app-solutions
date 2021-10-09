import React from "react";
import PropTypes from "prop-types";
import Tile from "./Tile";

function DaysCompleted(props) {
  const { days, checkins } = props;

  const textStyle = { textAlign: "center", color: "#BC9CFF" };
  const divStyle = {
    display: "grid",
    gridTemplateColumns: ".8fr",
    "grid-template-rows": "70px 80px 5px auto",
    justifyContent: "center",
  };

  return (
    <Tile>
      <div style={divStyle} id="wrapper">
        <h2 style={textStyle}> {days} Days Completed! </h2>
        <h4 style={{ color: "#1F2041" }}>
          {" "}
          <strong>50%</strong> TO GOAL!
        </h4>
      </div>
    </Tile>
  );
}

DaysCompleted.propTypes = {
  days: PropTypes.number,
  checkins: PropTypes.array.isRequired,
};

DaysCompleted.defaultProps = {
  days: 0,
};

export default DaysCompleted;
