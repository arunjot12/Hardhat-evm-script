require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("@nomicfoundation/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
// const ALCHEMY_API_KEY = "Japd4jMfawgqY0HuVrZlKNlAMCDEplKW";
const PRIVATE_KEY = "3985b2b82fa3d5db91ee434500cf994af924c7cd1b9d6ef8686369bba1bd7070";

module.exports = {
  solidity: {
    compilers : [
      {
        version: "0.8.7", // Specify the exact version or range here
      },
      {
        version: "0.8.2",
      },
      {
        version: "0.8.1",
      }
    ]
  },
  networks : {
    // holesky : {
    //   // url : `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
    //   url:`https://eth-holesky.public.blastapi.io`,
    //   // url:`https://ethereum-holesky-rpc.publicnode.com`,
    //   accounts : [`${PRIVATE_KEY}`]
    // },
    custom : {
      url : 'http://127.0.0.1:9944',
      accounts : [`${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: "Y6PMZSW9N93SV5ZHMTMXXX4FJRAVMEZ7KC"
  },
  sourcify: {
    enabled: true
  },
};
