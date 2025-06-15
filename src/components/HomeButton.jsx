import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const HomeContainer = styled(motion.div)`
  position: fixed;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  z-index: 100;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const HomeLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const HomeIcon = styled.span`
  margin-right: 8px;
  font-size: 16px;
`;

const HomeText = styled.span`
  display: inline-block;
  font-weight: 500;
`;

function HomeButton() {
  return (
    <HomeContainer
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HomeLink to="/">
        <HomeIcon>🏠</HomeIcon>
        <HomeText>Home</HomeText>
      </HomeLink>
    </HomeContainer>
  );
}

export default HomeButton;
