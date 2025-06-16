// Blog post summaries for the listing page
export const blogPosts = [
  {
    id: 1,
    title: "0xthanh's personal guide into crypto as a student",
    excerpt:
      "I got into crypto through hackathons and internships—learning by building, breaking things, and reading docs at 2AM. It was chaotic, but that’s what made it exciting. This guide comprisies all helpful resources I found.",
    date: "2025-06-14",
    readTime: "10 min read",
    category: "Crypto",
  },
];

// Full blog content
export const blogContent = {
  1: {
    title: "0xthanh's personal guide into crypto as a student",
    date: "2025-06-14",
    readTime: "10 min read",
    category: "Blockchain",
    content: `
    <p>Getting started in crypto can feel overwhelming, but the right resources can make all the difference. Below is a curated list of beginner-to-advanced materials to help you build a strong foundation in Bitcoin, Ethereum, smart contracts, DeFi, and beyond.</p>

    <h2>📘 Core Reading</h2>
    <ul>
        <li><strong>Bitcoin (Princeton Book)</strong> – In-depth look at Bitcoin's technical foundations: 
        <a href="https://d28rh4a8wq0iu5.cloudfront.net/bitcointech/readings/princeton_bitcoin_book.pdf" target="_blank">Read here</a>
        </li>
        <li><strong>Ethereum Learning Hub</strong> – BEST WIKI on how Ethereum works from the documents:
        <a href="https://ethereum.org/en/learn/" target="_blank">ethereum.org/learn</a>
        </li>
        <li><strong>Speedrun Ethereum</strong> – SPEEDRUN ETHEREUM:
        <a href="https://speedrunethereum.com/" target="_blank">speedrunethereum.com</a>
        </li>
        <li><strong>0xmons Ethereum Deep Dive</strong> – A recent community guide on Ethereum:
        <a href="https://x.com/0xmons/status/1932468078438490321?s=46" target="_blank">View thread</a>
        </li>
    </ul>

    <h2>🛠 Smart Contract & DeFi Tutorials</h2>
    <ul>
        <li><strong>Cyfrin Updraft</strong> – Learn smart contract development and real-world DeFi integrations: 
        <a href="https://www.cyfrin.io/updraft" target="_blank">Start here</a>
        </li>
        <li><strong>CryptoZombies</strong> – A fun way to learn Solidity by building a zombie game:
        <a href="https://cryptozombies.io" target="_blank">cryptozombies.io</a>
        </li>
        <li><strong>DeFi Protocol Deep Dives</strong> – Understand how these core protocols work:
        <ul>
            <li>Uniswap v2/v3/v4 – DEX with AMM model</li> (Check out uniswap websites or Atrium Academy for Uniswap v4)
            <li>Curve – Stablecoin-focused AMM</li>
            <li>Balancer – Generalized AMM with customizable pools</li>
        </ul>
        <li>Some famous ERCs standards to read into (check out from OpenZeppelin / Solady):
        <ul>
            <li>ERC20 – Standard for fungible tokens</li>
            <li>ERC721 – Standard for non-fungible tokens</li>
            <li>ERC1155 – Standard for multiple token types</li>
            <li>ERC4626 – Standard for tokenized vaults</li>
        </ul>
        </li>
    </ul>

    <h2>🚀 Important Topics / Projects to Explore</h2>
    <ul>
        <li><strong>Lido</strong> – Liquid staking protocol (stETH)</li>
        <li><strong>Circles and Stablecoins</strong> - How they work and how they are used</li>
        <li><strong>Aave</strong> – Decentralized lending/borrowing platform</li>
        <li><strong>Pendle</strong> – Yield trading and fixed income DeFi</li>
        <li><strong>EigenLayer</strong> – Restaking protocol enabling AVS (Actively Validated Services)</li>
        <li><strong>Chainlink</strong> – Oracle and randomness infrastructure (incl. CCIP)</li>
        <li><strong>Across</strong> – Secure and efficient cross-chain bridging</li>
        <li><strong>Layer 2s</strong> – Compare Optimistic Rollups (e.g., OP) vs ZK-Rollups</li>
        <li><strong>Virtuals</strong> - Platform to launch AI agents</li>
        <li><strong>Polymarket</strong> - Platform to launch prediction markets</li>
    </ul>
    <h2>🔬 Advanced Topics</h2>
    <ul>
        <li><strong>Zero-Knowledge Proofs (ZK)</strong> – Privacy-preserving proofs like zk-SNARKs & zk-STARKs</li>
        <li><strong>Assembly script and Gas optimization</strong> – Learn how to write efficient smart contracts</li>
        <li><strong>Formal Verification</strong> – Proving smart contracts work as expected mathematically</li>
    </ul>

    <h2>🧠 Tips for Learning</h2>
    <ul>
        <li>Skim one core reading, then go hands-on via tutorial</li>
        <li>Explore one DeFi protocol by reading its docs and trying its UI with small amounts</li>
        <li>Join developer discords (e.g., Cyfrin, ETHGlobal, protocol-specific) to ask questions</li>
        <li>Follow crypto researchers and devs on Twitter/Farcaster</li>
    </ul>

    <p>Crypto is fast-moving—don’t rush it. Build intuition step-by-step, and use these resources as your map.</p>
    `,
  },
};
