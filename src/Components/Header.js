import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../services/firebase/useAuth";
import avatar from "../assets/avatar_small.png"

const StyledNav = styled.nav`
    ul {  
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `;

const StyledLi = styled.li`
    margin-bottom: 10%;
    cursor: pointer;
    width: 100%;
    text-align: center;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme, active }) =>
    active ? theme.colors.darkShade[25] : ""};
  `;

const StyledClosedText = styled.p`
    text-align: right;
    padding-right: 3%;
    margin-bottom: 15%;
    font-size: 18px;
    cursor: pointer;
  `;

const StyledBurgerMenu = styled.div`
    width: 90px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    hr {
      margin: 4px 0 0 4px;
      width: 20%;
      border: 1px solid ${({ theme }) => theme.colors.darkShade[100]};
    }
  `;

const StyledUserAvatar = styled.div`
    color: ${({ theme }) => theme.colors.darkShade[50]};
    display: flex;
    align-items: center;
    img {
      margin-top: 8%;
    }
  `;

const StyledMenuWrapper = styled.div`
    transition: all 1s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    height: 100vh;
    width: 304px;
    background: linear-gradient(180deg, #6fcf9d 0%, #67d2e8 100%);
    position: absolute;
    padding-top: 1%;
    top: 0;
    left: 0;
  `;

const StyledWrapper = styled.div`
    width: 100%;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.lightPurple} 0%,
      ${({ theme }) => theme.colors.purple} 100%
    );
    height: 50px;
    display: flex;
    justify-content: space-between;
  `;


function Menu(props) {
  const { onClick } = props;
  const location = useLocation();



  return (
    <div>
      <StyledClosedText onClick={onClick}> X </StyledClosedText>
      <StyledNav>
        <ul>
          <StyledLi active={location.pathname === "/"}>  <Link to="/"> Dash </Link> </StyledLi>
          <StyledLi active={location.pathname === "/profile"}>  <Link to="/profile"> Profile </Link> </StyledLi>
        </ul>
      </StyledNav>
    </div>
  );
}

Menu.propTypes = {
  onClick: PropTypes.func.isRequired
};

function Header(props) {

  const { onClick, open } = props;

  const handleClick = e => {
    e.preventDefault();
    onClick(e);
  };


  const { user, signUserOut } = useAuth();





  return (
    <div>
      <StyledMenuWrapper open={open}>
        <Menu onClick={handleClick} />
      </StyledMenuWrapper>

      <StyledWrapper>
        <StyledBurgerMenu onClick={handleClick}>
          <hr />
          <hr />
          <hr />
        </StyledBurgerMenu>
        <StyledUserAvatar>
          <h6> {user.displayName || user.email}  <span onClick={signUserOut}>(Logout)</span></h6>
          <img src={user.photoURL || avatar} alt="avatar" />
        </StyledUserAvatar>
      </StyledWrapper>
    </div>
  );
}

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default Header;
