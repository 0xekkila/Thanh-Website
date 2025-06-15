import React from "react";
import styled from "styled-components";
import { SectionTitle, StyledLink, StyledSpan } from "../common/CommonStyles";

const ContactContainer = styled.div`
  width: 100%;
`;

const SummaryText = styled.p`
  margin-bottom: 10px;
  width: 100%;
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
          <StyledSpan>me@thanh.sh</StyledSpan>.

          See my work mostly at 
          <StyledLink
            href="https://github.com/0xekkila"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </StyledLink>
        </SummaryText>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
