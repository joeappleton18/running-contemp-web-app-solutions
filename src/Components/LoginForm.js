import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import Button from "../Components/Button";
import Input from "../Components/Input";
import Label from "./Label";


function LoginForm(props) {

  const { buttonText } = props;


  const StyledHeading = styled.h2`
    text-align: center;
    margin-top: 2%;
    color: ${({ theme }) => theme.colors.purple};
  `;

  const StyledSocialIconArea = styled.div`
    display: flex;
    justify-content: space-around;
    img {
      width: 50px;
      height: 50px;
    }
  `;

  return (
    <React.Fragment>
      <StyledSocialIconArea>
        <img src={facebook} alt="#" />
        <img src={google} alt="#" />
      </StyledSocialIconArea>
      <StyledHeading> OR </StyledHeading>


      <Button text="Email" />


      <form>
        <p>
          <Label> Email </Label>
        </p>
        <p>
          <Input />
        </p>
        <p>
          <Label> Password </Label>
        </p>
        <p>
          <Input />
        </p>
        <Button text={buttonText} />
      </form>
    </React.Fragment>
  );
}

LoginForm.propTypes = {
  buttonText: PropTypes.string
};

LoginForm.defaultProps = {
  buttonText: "JOIN"
};

export default LoginForm;
