import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Form from "../Components/LoginForm";
import Tile from "../Components/Tile";




function Login() {


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


	return (
		<StyledWrapper>
			<StyledTile>

				<StyledHeading>Login With </StyledHeading>
				<Form buttonText="LOGIN" />
				<StyledLink to="/join"> Not a member - Join </StyledLink>
			</StyledTile>
		</StyledWrapper>
	);
}

export default Login;