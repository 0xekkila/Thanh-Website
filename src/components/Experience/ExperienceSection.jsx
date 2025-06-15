import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../common/CommonStyles";

const ExperienceContainer = styled.div`
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

const experiences = [
  {
    company: "Base",
    logo: "/assets/logos/base_logo.jpeg",
    url: "https://www.base.org/",
    role: "Protocol Intern",
    date: "Summer 2025",
  },
  {
    company: "Infinifi",
    logo: "/assets/logos/infinifi_logo.png",
    url: "https://infinifi.xyz/",
    role: "Founding Intern",
    date: "Spring 2025",
  },
  {
    company: "Cambrian Network",
    logo: "/assets/logos/cambrian_logo.jpg",
    url: "https://www.cambrian.org/",
    role: "Intern",
    date: "Fall 2024",
  },
  {
    company: "Semiotics Lab",
    logo: "/assets/logos/semioticlabs_logo.jpg",
    url: "https://semiotic.ai/",
    role: "Intern",
    date: "Fall 2024",
  },
  {
    company: "Revest Finance",
    logo: "/assets/logos/revest_logo.jpeg",
    url: "https://revestlabs.com/",
    role: "Intern",
    date: "Summer 2024",
  },
  {
    company: "Revest Finance",
    logo: "/assets/logos/revest_logo.jpeg",
    url: "https://revestlabs.com/",
    role: "Intern",
    date: "Summer 2023",
  },
];

const ExperienceSection = () => {
  return (
    <>
      <SectionTitle>EXPERIENCE</SectionTitle>
      <ExperienceContainer>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index}>
            <CompanyLogo>
              <img src={exp.logo} alt={exp.company} />
            </CompanyLogo>
            <ExperienceContent>
              <h4>
                {exp.role} @{" "}
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="company"
                >
                  {exp.company}
                </a>
              </h4>
            </ExperienceContent>
            <ExperienceDate>{exp.date}</ExperienceDate>
          </ExperienceItem>
        ))}
      </ExperienceContainer>
    </>
  );
};

export default ExperienceSection;
