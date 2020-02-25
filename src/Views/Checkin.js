import React from "react";
import Tile from "../Components/Tile";
import styled from "styled-components";
import Label from "../Components/Label";
import drinkIcon from "../assets/drink-icon.svg";
import foodIcon from "../assets/food-icon.svg";
import Button from "../Components/Button";

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

const StyledLabel = styled(Label)`
  text-align: left;
  margin-top: 5%;
`;

const StyledForm = styled.form`
  display: grid;
  justify-content: center;
  text-align: left;
`;
const StyledCheckinP = styled.p`
  display: flex;
  font-size: 13px;
  justify-content: space-around;
  margin-top: 5%;
  input:nth-child(1) {
    background: green;
  }

  input:checked {
    background-color: #a77e2d !important;
    color: #ffffff !important;
  }
`;

const StyledFoodDrinkArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
`;

const StyledSelect = styled.select`
  padding-left: 25%;
  text-indent: 40%;
  background: white;
  width: 135px;
  height: 44px;
  font-size: 14px;
  color: rgba(31, 32, 65, 0.75);
`;

const StyledIcon = styled.img`
  margin-right: -10px;
  z-index: 2000;
  display: relative;
  position: absolute;
  margin-top: 10px;
  margin-left: 6px;
`;

const Checkin = props => {
  return (
    <StyledTile>
      <StyledHeading> Log Your Progress For May 18 </StyledHeading>
      <StyledForm>
        <StyledLabel>Did you exercise for at least 20 mins?</StyledLabel>
        <StyledCheckinP>
          {" "}
          <span>
            <input type="radio" name="exercise" /> Yes{" "}
          </span>{" "}
          <span>
            <input type="radio" name="exercise" /> No{" "}
          </span>{" "}
        </StyledCheckinP>
        <StyledLabel>Did you eat 5 portions of veg?</StyledLabel>
        <StyledCheckinP>
          <span>
            <input type="radio" name="exercise" /> Yes
          </span>
          <span>
            <input type="radio" name="exercise" /> No
          </span>
        </StyledCheckinP>
        <StyledLabel>WAS Your Diet Perfect?</StyledLabel>
        <StyledCheckinP>
          <span>
            <input type="radio" name="exercise" /> Yes
          </span>
          <span>
            <input type="radio" name="exercise" /> No
          </span>
        </StyledCheckinP>
        <StyledFoodDrinkArea>
        <StyledLabel>Drinks</StyledLabel>
        <StyledLabel>Food</StyledLabel>
          <div>
            
            <StyledIcon src={drinkIcon} />
            <StyledSelect>
              <option value="1"> 0 </option>
              <option value="2"> 2 </option>
              <option value="3"> 3 </option>
              <option value="4"> 4 </option>
              <option value="4"> 5 </option>
            </StyledSelect>
          </div>
          <div>
            <StyledIcon src={foodIcon} />
            <StyledSelect>
              <option value="0"> 0 </option>
              <option value="1"> 1 </option>
              <option value="2"> 2 </option>
              <option value="3"> 3 </option>
              <option value="4"> 4 </option>
              <option value="4"> 5 </option>
            </StyledSelect>
          </div>
        </StyledFoodDrinkArea>
        <Button  text="CHECKIN"/>
      </StyledForm>
    </StyledTile>
  );
};

Checkin.propTypes = {};

export default Checkin;
