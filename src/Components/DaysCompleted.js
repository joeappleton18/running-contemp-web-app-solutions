import React from "react";
import PropTypes from "prop-types";
import Tile from "./Tile";
import Histogram from "./Histogram";
import ProgressBar from "./ProgressBar";
import styled from "styled-components";

function DaysCompleted(props) {
  const { days, checkins } = props;

  const StyledDaysCompleteHeading = styled.h2`
    text-align: center;
    color: ${ props => props.theme.colors.purple};
  `;

  const StyledRootDiv = styled.div`
    display: grid;
    grid-template-columns: 0.8fr;
    grid-template-rows: 55px 80px 20px auto;
    justify-content: center;
  `;

  const StyledGoalHeading = styled.h4`
    color: #1f2041;
  `;
  
  return (
    <Tile>
      <StyledRootDiv>
        <StyledDaysCompleteHeading> {days} Days Completed! </StyledDaysCompleteHeading>
        <Histogram barCount={7} bars={checkins.map(c => c.score * 5)} />
        <ProgressBar percentage={50} />
        <StyledGoalHeading>
          <strong>50%</strong> TO GOAL!
        </StyledGoalHeading>
      </StyledRootDiv>
    </Tile>
  );
}

DaysCompleted.propTypes = {
  days: PropTypes.number,
  checkins: PropTypes.array.isRequired
};

DaysCompleted.defaultProps = {
  days: 0
};

export default DaysCompleted;
