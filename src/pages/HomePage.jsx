// src/pages/HomePage.jsx
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import CryptoPrice from "../components/EthPrice";

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
  padding: 0 20px;
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
  z-index: 1;
`;

const PageBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #121212 0%, #1e1e1e 100%);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 30%,
        rgba(0, 255, 136, 0.15) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 70%,
        rgba(0, 178, 255, 0.15) 0%,
        transparent 50%
      );
    z-index: 0;
  }
  z-index: -1;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 30px;
  transition: all 0.3s ease;
  object-fit: cover;

  @keyframes jiggle {
    0%,
    100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-5deg);
    }
    75% {
      transform: rotate(5deg);
    }
  }
`;

const ProfileImageContainer = styled.a`
  position: relative;
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  width: 80px;
  height: 80px;
  margin-right: 30px;

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 0;
  }

  &:hover {
    img {
      animation: jiggle 0.5s ease-in-out;
    }
  }
`;

const ProfileInfo = styled.div`
  h1 {
    font-size: 2rem;
    margin: 0;
    display: flex;
    align-items: center;
  }

  p {
    margin: 5px 0;
    color: #aaa;
  }

  .domain {
    position: relative;
    background: transparent;
    color: transparent;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.8rem;
    display: inline-block;
    margin-left: 10px;
    transition: all 0.3s ease;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: linear-gradient(90deg, #00ff88 0%, #00b2ff 100%);
    background-size: 200% 100%;
    animation: gradientShift 3s linear infinite;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 4px;
      padding: 1px;
      background: linear-gradient(90deg, #00ff88 0%, #00b2ff 100%);
      background-size: 200% 100%;
      animation: gradientShift 3s linear infinite;
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
    }

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(0, 255, 136, 0.3);
      animation-play-state: paused;

      &::before {
        animation-play-state: paused;
      }
    }
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const SectionTitle = styled.h3`
  text-transform: uppercase;
  color: #00b2ff;
  font-size: 0.8rem;
  margin-top: 40px;
  margin-bottom: 10px;
  width: 100%;
`;

const SummaryText = styled.p`
  margin-bottom: 10px;
  width: 100%;
`;

const ExperienceSection = styled.div`
  width: 100%;
`;

const ExperienceItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-weight: 400;
    margin: 0;
    font-size: 1rem;
    display: flex;
    align-items: center;

    .company {
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
    }
  }
`;

const CompanyLogo = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ExperienceContent = styled.div`
  flex: 1;
`;

const ExperienceDate = styled.span`
  color: #9ca3af;
  font-size: 0.9rem;
  margin-left: 15px;
`;

const ContactSection = styled.div`
  width: 100%;
`;

const FooterSection = styled.div`
  width: 100%;
  margin-top: 40px;
  font-size: 0.8rem;
  color: #666;
`;

const StyledLink = styled.a`
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

const StyledSpan = styled.span`
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

function HomePage() {
  return (
    <>
      <PageBackground />
      <CryptoPrice />
      <HeroSection>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ width: "100%" }}
        >
          <ProfileSection>
            <ProfileImageContainer
              href="https://salvor.io/collections/0x204b3ee3f9bdcde258ba3f74de76ea8eedf0a36a/304"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProfileImage src="/assets/nochill.png" alt="Profile" />
            </ProfileImageContainer>
            <ProfileInfo>
              <h1>
                Thanh Trinh{" "}
                <a
                  href="https://zapper.xyz/account/0x7a918b28b960c8dbe7c0ea9f889cc1ce1072ecce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="domain"
                >
                  thành.eth
                </a>
              </h1>
              <p>Building @ Infinifi | Incoming @ Base | CS @ Georgia Tech</p>
            </ProfileInfo>
          </ProfileSection>

          <SectionTitle>ABOUT ME</SectionTitle>
          <SummaryText>
            I'm a CS student at Georgia Tech with specialization in System
            Architecture and Theory.
          </SummaryText>
          <SummaryText>
            Currently, I'm super into blockchain and defi.
          </SummaryText>
          <SectionTitle>EXPERIENCE</SectionTitle>
          <ExperienceSection>
            <ExperienceItem>
              <CompanyLogo>
                <img src="/assets/logos/base_logo.jpeg" alt="Base" />
              </CompanyLogo>
              <ExperienceContent>
                <h4>
                  Incoming Intern @{" "}
                  <a
                    href="https://www.base.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company"
                  >
                    Base
                  </a>
                </h4>
              </ExperienceContent>
              <ExperienceDate>Summer 2025</ExperienceDate>
            </ExperienceItem>

            <ExperienceItem>
              <CompanyLogo>
                <img src="/assets/logos/infinifi_logo.png" alt="Infinifi" />
              </CompanyLogo>
              <ExperienceContent>
                <h4>
                  Founding Member @{" "}
                  <a
                    href="https://infinifi.xyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company"
                  >
                    Infinifi
                  </a>
                </h4>
              </ExperienceContent>
              <ExperienceDate>Spring 2025</ExperienceDate>
            </ExperienceItem>

            <ExperienceItem>
              <CompanyLogo>
                <img
                  src="/assets/logos/cambrian_logo.jpg"
                  alt="Cambrian Network"
                />
              </CompanyLogo>
              <ExperienceContent>
                <h4>
                  Intern @{" "}
                  <a
                    href="https://www.cambrian.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company"
                  >
                    Cambrian Network
                  </a>
                </h4>
              </ExperienceContent>
              <ExperienceDate>Fall 2024</ExperienceDate>
            </ExperienceItem>

            <ExperienceItem>
              <CompanyLogo>
                <img
                  src="/assets/logos/semioticlabs_logo.jpeg"
                  alt="Semiotics Lab"
                />
              </CompanyLogo>
              <ExperienceContent>
                <h4>
                  Intern @{" "}
                  <a
                    href="https://semiotic.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company"
                  >
                    Semiotics Lab
                  </a>
                </h4>
              </ExperienceContent>
              <ExperienceDate>Fall 2024</ExperienceDate>
            </ExperienceItem>

            <ExperienceItem>
              <CompanyLogo>
                <img
                  src="/assets/logos/revest_logo.jpeg"
                  alt="Revest Finance"
                />
              </CompanyLogo>
              <ExperienceContent>
                <h4>
                  Intern @{" "}
                  <a
                    href="https://revestlabs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company"
                  >
                    Revest Finance
                  </a>
                </h4>
              </ExperienceContent>
              <ExperienceDate>Summer 2024</ExperienceDate>
            </ExperienceItem>

            <ExperienceItem>
              <CompanyLogo>
                <img
                  src="/assets/logos/revest_logo.jpeg"
                  alt="Revest Finance"
                />
              </CompanyLogo>
              <ExperienceContent>
                <h4>
                  Intern @{" "}
                  <a
                    href="https://revestlabs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company"
                  >
                    Revest Finance
                  </a>
                </h4>
              </ExperienceContent>
              <ExperienceDate>Summer 2023</ExperienceDate>
            </ExperienceItem>
          </ExperienceSection>

          <SectionTitle>HOW TO REACH ME</SectionTitle>
          <ContactSection>
            <SummaryText>
              Connect with me on{" "}
              <StyledLink
                href="https://www.linkedin.com/in/thanhtrinh03/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </StyledLink>
              ,{" "}
              <StyledLink
                href="https://x.com/0xthanh"
                target="_blank"
                rel="noopener noreferrer"
              >
                @0xthanh
              </StyledLink>{" "}
              on Twitter or send an email to me at{" "}
              <StyledSpan>me@thanh.sh</StyledSpan>.
            </SummaryText>
          </ContactSection>

          <FooterSection>
            <p>2025 ⟠ Thanh Trinh.</p>
          </FooterSection>
        </motion.div>
      </HeroSection>
    </>
  );
}

export default HomePage;
