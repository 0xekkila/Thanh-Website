// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  width: 100%;
  z-index: 100;
  backdrop-filter: blur(10px);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px 15px 15px 25px; /* Increase left padding specifically */
  }
`;

const Logo = styled(Link)`
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  position: relative;
  left: 0;
  padding-left: 0;

  @media (max-width: 480px) {
    margin-left: 0;
    padding-left: 0;
    position: relative;
    left: 0;
  }
`;

const NavLinks = styled.div`
  a {
    margin-left: 20px;
    font-weight: 500;
    color: #fff;
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
      color: #fff;
    }
  }

  @media (max-width: 480px) {
    a {
      margin-left: 15px;
    }
  }
`;

function Navbar() {
  return (
    <NavbarWrapper>
      <Logo to="/">YourName</Logo>
      <NavLinks>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
    </NavbarWrapper>
  );
}

export default Navbar;
