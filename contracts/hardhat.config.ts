import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomiclabs/hardhat-ethers";

const RECOVERY_PHRASE = "size crush sun face stumble regret humble picnic humor staff unfold author left owner modify scan broken rare pledge tank hundred method common error";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const config: HardhatUserConfig = {
  solidity: "0.8.17",

  networks: {
    'optimism-goerli': {
      url: "https://goerli.optimism.io",

      accounts: {
        mnemonic: RECOVERY_PHRASE,
      },
    },
  },
};

export default config;
