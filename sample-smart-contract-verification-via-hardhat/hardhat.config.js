require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const EVMOS_PRIVATE_KEY = process.env.EVMOS_PRIVATE_KEY;
const ESCAN_API_KEY = process.env.ESCAN_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      },
    },
  },
  defaultNetwork: "evmos",
  networks: {
    evmos: {
      url: "https://eth.bd.evmos.org:8545",
      chainId: 9001,
      accounts: [EVMOS_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      evmos: ESCAN_API_KEY
    },
    customChains: [
      {
        network: "evmos",
        chainId: 9001,
        urls: {
          apiURL: "https://escan.live/api",
          browserURL: "https://escan.live"
        }
      }
    ]
  }
};
