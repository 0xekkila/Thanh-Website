// src/pages/HomePage.jsx
/*
 * THEME OPTIONS:
 *
 * Current: Blue-Black-Green Multi-Stop Gradient Theme
 * - Smooth gradient with 5 color stops for seamless transitions
 * - Flow: medium blue (#003366) → dark blue (#001a33) → black (#000000) → dark green (#001a00) → medium green (#003300)
 * - Radial overlays: blue (top-left), green (bottom-right), mixed (center)
 * - White text for contrast
 *
 * Alternative Themes:
 *
 * 1. Black-Blue Theme
 *    - Pure black to blue gradient
 *    - All blue radial overlays
 *
 * 2. Simple Blue-Black-Green Theme
 *    - 3-stop gradient: blue → black → green
 *    - More abrupt color transitions
 *
 * 3. Vibrant Blue-Black-Green Theme
 *    - Brighter blue (#0066cc) to black to bright green (#00cc66)
 *    - More saturated colors for a bolder look
 *
 * 4. White-Blue Theme
 *    - Light background with blue accents
 *    - Requires text color changes (see below)
 *
 * To switch to White-Blue Theme:
 * 1. In PageBackground component, comment out current theme and uncomment the White-Blue Theme
 * 2. Also switch the overlay gradients in the &::before section
 * 3. Update HeroSection color from #fff to #000 or #333
 * 4. Update ProfileInfo p color from #aaa to #666
 * 5. Update SectionTitle color to a darker blue like #0066cc
 * 6. Update ExperienceDate color from #9ca3af to #666
 * 7. Update FooterSection color from #666 to #999
 */

import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import CryptoPrice from "../components/EthPrice";
import AnimatedBackground from "../components/Background/AnimatedBackground";
import ProfileSection from "../components/Profile/ProfileSection";
import AboutSection from "../components/About/AboutSection";
import ExperienceSection from "../components/Experience/ExperienceSection";
import ContactSection from "../components/Contact/ContactSection";
import FooterSection from "../components/Footer/FooterSection";

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

function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <CryptoPrice />
      <HeroSection>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ width: "100%" }}
        >
          <ProfileSection />
          <AboutSection />
          <ExperienceSection />
          <ContactSection />
          <FooterSection />
        </motion.div>
      </HeroSection>
    </>
  );
}

export default HomePage;
