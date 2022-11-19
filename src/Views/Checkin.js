import React from "react";
import Tile from "../Components/Tile";
import styled from "styled-components";
import CheckinForm from "../Components/CheckinForm";

const StyledTile = styled(Tile)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  grid-row-gap: 20px;
  width: 100%;
`;

const StyledHeading = styled.h4`
  text-align: center;
  margin-top: 2%;
  color: ${({ theme }) => theme.colors.purple};
`;

const Checkin = () => {
  return (
    <StyledTile>
      <StyledHeading> Log Your Progress </StyledHeading>
      <CheckinForm />
    </StyledTile>
  );
};

export default Checkin;
