import React, { useState } from "react";
import styled from "styled-components";
import Tile from "../Components/Tile";
import { Link } from "react-router-dom";
import Form from "../Components/LoginForm";
import useAuth from "../services/firebase/useAuth";
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
`;

const StyledTile = styled(Tile)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  grid-row-gap: 20px;
  width: 100%;
  @media (min-width: 600px) {
    width: 30%;
  }
`;

const StyledHeading = styled.h2`
  text-align: center;
  margin-top: 2%;
  color: ${({ theme }) => theme.colors.purple};
`;
const StyledLink = styled(Link)`
  text-align: center;
`;

function Join(props) {
  const { createEmailUser } = useAuth();
  const [severErrorMessage, setServerErrorMessage] = useState("this is a test");

  const handleEmailSubmit = async (data) => {
    try {
      const { email, password } = data;
      await createEmailUser(email, password);
    } catch (e) {
      setServerErrorMessage(e.message);
    }
  };

  return (
    <StyledWrapper>
      <StyledTile>
        <StyledHeading>Get Started</StyledHeading>
        <StyledHeading>Join With </StyledHeading>
        <Form
          onEmailSubmit={handleEmailSubmit}
          serverErrorMessage={severErrorMessage}
        />
        <StyledLink to="/login"> Already a member - Login </StyledLink>
      </StyledTile>
    </StyledWrapper>
  );
}

Join.propTypes = {};

export default Join;
