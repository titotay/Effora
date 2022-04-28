require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt produce border tell notice crime remind artist harvest depth fresh trim'; 
let testAccounts = [
"0xa7e0cee1ec46cc7a8cd7ad8bd4cf6cdf626b09f1942063cb608a653346cbb6fd",
"0x015fbb0804be6c5dd6dec9277007b6938afea0ff16f92fd5763355fb84c92b7f",
"0xd41c6eecabd0a0723a794dd6b2155700c4fdd67d49dbe3ce696c9977a6f952e7",
"0x838df3bc8fc24449225944ff25c562a45e941bb9dd95350c60ddc1ef68a9a45e",
"0xc6c7c6cb98e37059818a33b832745a8b492549f40cb6f095a94718aa589e33db",
"0x5fc861e4d64d8da12912cae39d8208b92c440d699af23f2b89932f8efc49591c",
"0x41772d47fca05a1c22e606388bc2a28b57c9bb06191118fb9f7380c73a873ee6",
"0xfaa58a0442dcd57db8fe3bceafcc14627fce4656fa11bbbcec5763a317d4e70e",
"0xfac03aa141829f1b802ba826fe33a85a260948d293fe32996d15717727eb7043",
"0x752f9ac6ae85c891392195717d94f87dd66ed30227c0413beab91695821e3528"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

