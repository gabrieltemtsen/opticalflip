# OpticalFlip NFT Minting Game 

**NOTE**: You may need a Metamask or Core Wallet enabled to test on devevlopment environment.

## Summary
OpticalFlip is a simple to use NFT Minting game used to mint NFT's on the Optimism testnet Blockchain Network.

## Requirements
1. [Vscode] or any IDE of your choice.
2. [Node.js] version 16 or higher.
3. [Google-Chrome]-[Metamask] / [Core].
4. [HardHat].
5. [Typescript].

## How to start the OpticalFlip NFT Minting Game
1. Clone the repository.
2. cd into the repository.
3. run:  npm install.
4. [Optional] navigate to src/util/EtherJSFunctions.js, in line 11: to change the smart contract address if you deploy a new one later on. (By default there is a smart contract address there).
5. [Optional] navigate to src/util/PinataConnection.js, in line 4 & 5: to change the API key and API secret of your pinata account, if you choose to use yours. (By default there is a Test API Key and API Secret there).
6. run: npm run start.

**Live Demo** : https://opticalflip.netlify.app/

## How to deploy the ERC721 Contract on the Optimism Testnet
1. cd into /contracts.
2. run: npm install.
3. [Optional] navigate to /contracts/hardhat.config.ts, in line 6:  you can choose to use your recovery phrase to deploy the NFT smart contract so you can be the owner.
4. run: npx hardhat compile (to compile the smart contract);
5. run: npx hardhat run --network optimism-goerli scripts/deploy.ts
6. copy your new smart contract address and refer to the previous step above(step 4).


