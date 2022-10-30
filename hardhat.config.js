require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { ALCHEMY_GOERLI_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: ALCHEMY_GOERLI_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
