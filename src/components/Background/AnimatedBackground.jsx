import React from "react";
import styled from "styled-components";

const PageBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  /* Alternative Blue-Black-Green (with multiple stops for smoother blend) */
  background: linear-gradient(
    135deg,
    #003366 0%,
    #001a33 25%,
    #000000 50%,
    #001a00 75%,
    #003300 100%
  );
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;

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

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* Blue-Black-Green Theme overlays */
    background: radial-gradient(
        circle at 20% 30%,
        rgba(0, 102, 255, 0.18) 0%,
        transparent 60%
      ),
      radial-gradient(
        circle at 80% 70%,
        rgba(0, 255, 136, 0.12) 0%,
        transparent 60%
      ),
      radial-gradient(
        circle at 50% 50%,
        rgba(0, 153, 77, 0.08) 0%,
        transparent 80%
      );
    animation: pulseGlow 8s ease-in-out infinite;

    @keyframes pulseGlow {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.7;
      }
    }
    z-index: 0;
  }
  z-index: -1;
`;

const AnimatedBackground = () => {
  return <PageBackground />;
};

export default AnimatedBackground;
