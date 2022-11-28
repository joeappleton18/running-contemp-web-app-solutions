import React from "react";
import Tile from "../Components/Tile";
import styled from "styled-components";
import CheckinForm from "../Components/CheckinForm";
import useAuth from "../services/firebase/useAuth";
import useCheckin from "../services/firebase/useCheckin";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  const { user } = useAuth();
  const { createCheckin } = useCheckin();
  const handleSubmit = async (checkin) => {
    const ckin = {
      ...checkin,
      ...{
        photo: user.photoURL,
        userId: user.uid,
        userName: user.displayName || user.email,
        time: new Date(),
      },
    };

    try {
      await createCheckin(ckin);
      history.push("/");
    } catch (e) {
      console.log(e);
      console.log(e);
    }
  };

  return (
    <StyledTile>
      <StyledHeading> Log Your Progress For May 18 </StyledHeading>
      <CheckinForm onSubmit={handleSubmit} />
    </StyledTile>
  );
};

Checkin.propTypes = {};

export default Checkin;
