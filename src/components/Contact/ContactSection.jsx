import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SectionTitle, StyledLink, StyledSpan } from "../common/CommonStyles";

const ContactContainer = styled.div`
  width: 100%;
`;

const SummaryText = styled.p`
  margin-bottom: 10px;
  width: 100%;
`;

const InternalLink = styled(Link)`
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

const ContactSection = () => {
  return (
    <>
      <SectionTitle>HOW TO REACH ME</SectionTitle>
      <ContactContainer>
        <SummaryText>
          Connect with me on
          <StyledLink
            href="https://www.linkedin.com/in/thanhtrinh03/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </StyledLink>
          ,
          <StyledLink
            href="https://x.com/0xthanh"
            target="_blank"
            rel="noopener noreferrer"
          >
            @0xthanh
          </StyledLink>{" "}
          on Twitter or send an email to me at
          <StyledSpan>me@thanh.sh</StyledSpan>. See my work mostly at
          <StyledLink
            href="https://github.com/0xekkila"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </StyledLink>
          , or read my
          <InternalLink to="/blog">Blog</InternalLink>
        </SummaryText>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
