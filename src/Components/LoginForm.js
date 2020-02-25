import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../Components/Input";
import Button from "../Components/Button";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import Label from "./Label";

function LoginForm(props) {
  
  const {buttonText} = props;
 

  const StyledHeading = styled.h2`
    text-align: center;
    margin-top: 2%;
    color: ${({ theme }) => theme.colors.purple};
  `;

  const StyledSocialIconArea = styled.div`
    display: flex;
    justify-content: space-around;
  `;

  return (
    <React.Fragment>
      <StyledSocialIconArea>
        <SocialIcon network="facebook" />
        <SocialIcon network="google" />
        <SocialIcon network="twitter" />
      </StyledSocialIconArea>
      <StyledHeading> OR </StyledHeading>
  

        <Button  text="Email" />   
     

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
          <Button  text={buttonText} />  
        </form>
      )}
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
