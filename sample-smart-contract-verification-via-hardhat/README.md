# Sample deploy & verify smart contract on Escan.Live using Hardhat

This project demonstrates a basic use case. It comes with a sample contract, a script that deploys that contract and how to verify contract on Escan.Live API

Create an `.env` file with following content:
```env
EVMOS_PRIVATE_KEY=your-test-wallet-private-key
ESCAN_API_KEY=your-api-key
```

Try running some of the following tasks:

```bash
npm install --save-dev hardhat
npx hardhat compile
npx hardhat run scripts/deploy.js --network evmos
npx hardhat verify 0x... ... --network evmos
```
