import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
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

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
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

const ProfileSection = () => {
  return (
    <ProfileContainer>
      <ProfileImageContainer target="_blank" rel="noopener noreferrer">
        <ProfileImage src="/assets/picture-profile.jpg" alt="Profile" />
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
        <p>protocol intern @ base | cs @ georgia tech</p>
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default ProfileSection;
