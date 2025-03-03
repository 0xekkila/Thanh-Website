import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const PriceContainer = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  z-index: 100;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const CryptoIcon = styled.span`
  margin-right: 8px;
  font-size: 16px;
`;

const PriceText = styled(motion.span)`
  display: inline-block;
`;

function CryptoPrice() {
  const [price, setPrice] = useState("Loading...");
  const [isBitcoin, setIsBitcoin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPrice = async (crypto) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`
      );
      const data = await response.json();
      setPrice(`$${data[crypto].usd.toLocaleString()}`);
    } catch (error) {
      console.error(`Error fetching ${crypto} price:`, error);
      setPrice("Error");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    // Fetch initial price
    fetchPrice(isBitcoin ? "bitcoin" : "ethereum");

    // Set up interval for updates
    const interval = setInterval(() => {
      fetchPrice(isBitcoin ? "bitcoin" : "ethereum");
    }, 60000);

    return () => clearInterval(interval);
  }, [isBitcoin]);

  const toggleCrypto = () => {
    setIsBitcoin(!isBitcoin);
  };

  return (
    <PriceContainer
      onClick={toggleCrypto}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CryptoIcon>{isBitcoin ? "₿" : "Ξ"}</CryptoIcon>
      <AnimatePresence mode="wait">
        <PriceText
          key={isBitcoin ? "btc" : "eth"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {isLoading ? "Loading..." : price}
        </PriceText>
      </AnimatePresence>
    </PriceContainer>
  );
}

export default CryptoPrice;
