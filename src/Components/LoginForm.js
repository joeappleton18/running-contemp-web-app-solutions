import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Components/Button";
import ErrorLabel from "../Components/ErrorLabel";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import { useForm } from "react-hook-form";

import * as yup from "yup";

function LoginForm(props) {
  const { buttonText, onEmailSubmit, onSocialSubmit } = props;
  debugger;
  const [displayEmail, setDisplayEmail] = useState(false);

  const loginFormSchema = yup.object().shape({
    email: yup
      .string()
      .email("please enter a valid email")
      .required("please enter a email"),
    password: yup
      .string()
      .required("please enter a password")
      .min(5, "password must be 5 characters long"),
  });

  const { register, handleSubmit, errors } = useForm({
    validationSchema: loginFormSchema,
  });

  const StyledHeading = styled.h2`
    text-align: center;
    margin-top: 2%;
    color: ${({ theme }) => theme.colors.purple};
  `;

  const StyledSocialIconArea = styled.div`
    display: flex;
    justify-content: space-around;
  `;

  const handleClick = (e) => {
    e.preventDefault();
    setDisplayEmail(!displayEmail);
  };

  const errorBorder = (error) => error && { borderColor: "red" };

  return (
    <React.Fragment>
      <StyledSocialIconArea>
        <SocialIcon
          network="facebook"
          onClick={() => onSocialSubmit("facebook")}
        />
        <SocialIcon network="google" onClick={() => onSocialSubmit("google")} />
        <SocialIcon
          network="twitter"
          onClick={() => onSocialSubmit("facebook")}
        />
      </StyledSocialIconArea>
      <StyledHeading> OR </StyledHeading>

      {!displayEmail && <Button onClick={handleClick} text="Email" />}

      {displayEmail && (
        <form onSubmit={handleSubmit(onEmailSubmit)}>
          <p>
            <label> Email </label>
          </p>
          <p>
            <input
              type="text"
              name="email"
              style={errorBorder(errors.email)}
              ref={register}
            />
            <ErrorLabel> {errors.email && errors.email.message} </ErrorLabel>
          </p>

          <label> Password </label>

          <p>
            <input
              type="password"
              name="password"
              ref={register}
              style={errorBorder(errors.password)}
            />
            <ErrorLabel>
              {" "}
              {errors.password && errors.password.message}{" "}
            </ErrorLabel>
          </p>
          <Button text={buttonText} />
        </form>
      )}
    </React.Fragment>
  );
}

LoginForm.propTypes = {
  buttonText: PropTypes.string,
};

LoginForm.defaultProps = {
  buttonText: "JOIN",
};

export default LoginForm;
