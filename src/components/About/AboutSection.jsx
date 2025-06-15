import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../common/CommonStyles";

const SummaryText = styled.p`
  margin-bottom: 10px;
  width: 100%;
`;

const AboutSection = () => {
  return (
    <>
      <SectionTitle>ABOUT ME</SectionTitle>
      <SummaryText>
        I'm a CS student at Georgia Tech with specialization in System
        Architecture and Theory.
      </SummaryText>
      <SummaryText>Currently, I'm super into blockchain and defi for at least the next 5 years.</SummaryText>
    </>
  );
};

export default AboutSection;
