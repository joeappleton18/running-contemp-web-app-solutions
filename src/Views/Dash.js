import React from "react";
import PropTypes from "prop-types";
import DaysCompleted from "../Components/DaysCompleted";
import CheckinComment from "../Components/CheckinComment";


function Dash(props) {

  const {checkins} = props;

  return (
    <div>
      <DaysCompleted days={15} checkins={checkins}>
        {" "}
      </DaysCompleted>
      <CheckinComment />
    </div>
  );
}

Dash.propTypes = {
    checkins: PropTypes.array.isRequired
};

export default Dash;


