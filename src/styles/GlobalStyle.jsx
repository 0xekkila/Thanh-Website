// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset some default styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #000;
    color: #fff;
    line-height: 1.6;
  }
  
  a {
    text-decoration: none;
    color: #3b82f6;
    transition: color 0.2s;
  }
  
  a:hover {
    color: #60a5fa;
  }
  
  #root {
    max-width: 100%;
    margin: 0;
    padding: 0;
    text-align: left;
  }
`;

export default GlobalStyle;
