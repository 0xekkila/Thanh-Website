import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  font-size: 0.8rem;
  color: #666;
`;

const FooterSection = () => {
  return (
    <FooterContainer>
      <p>2025 ⟠ Thanh Trinh.</p>
    </FooterContainer>
  );
};

export default FooterSection;
