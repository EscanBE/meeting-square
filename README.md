# Escan API
#### Follow big bro Etherscan API interface

This branch contains
- Escan.Live API Postman collection
- Escan.Live API Postman enviroment
- [Sample smart contract verification using Hardhat](https://github.com/EscanBE/meeting-square/blob/escan-api/sample-smart-contract-verification-via-hardhat)
    1. `npm install && npm install --save-dev hardhat`
    2. `npx hardhat compile`
    3. `npx hardhat run scripts/deploy.js --network evmos`
    4. `npx hardhat verify 0x... ... --network evmos`