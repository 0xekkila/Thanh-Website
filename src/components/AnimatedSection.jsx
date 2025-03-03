// src/components/AnimatedSection.jsx
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import styled from "styled-components";

const Section = styled.section`
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  background: #eaeaea;
`;

function AnimatedSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Section ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2>This content fades in when in view</h2>
      </motion.div>
    </Section>
  );
}

export default AnimatedSection;
