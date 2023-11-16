//https://eth-goerli.g.alchemy.com/v2/WWCiALkNvBQYiD91OqtMj408WFrkgJqf

require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/WWCiALkNvBQYiD91OqtMj408WFrkgJqf',
      accounts: ['a480c3a9b56521568fee79606934a939f562b570e2f63c9edf416a06f0ecc48e']
    }
  }
};
