import styled from "styled-components";

export const SectionTitle = styled.h3`
  text-transform: uppercase;
  color: #00b2ff;
  font-size: 0.8rem;
  margin-top: 40px;
  margin-bottom: 10px;
  width: 100%;
`;

export const StyledLink = styled.a`
  color: #ffffff;
  font-weight: 600;
  position: relative;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-left: 6px;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 1px;
    left: 0;
    background-color: #00c2a0;
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #00e0b8;

    &::after {
      background-color: #00e0b8;
    }
  }
`;

export const StyledSpan = styled.span`
  color: #ffffff;
  font-weight: 600;
  position: relative;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-left: 6px;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 1px;
    left: 0;
    background-color: #00c2a0;
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #00e0b8;

    &::after {
      background-color: #00e0b8;
    }
  }
`;
