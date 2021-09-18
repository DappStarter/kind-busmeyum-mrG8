require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food chef rifle remain quality install hat army gas'; 
let testAccounts = [
"0x72179e8c1abe838b54ad3d48f2a8902d9a1675dbe3bbeafc16ed0ddff0d348a7",
"0x8ea4029efd779575f16fa2ffca90fc13e749acbbcb9f4da403718a28e265bd09",
"0xa0c5cac61f1a6725c6f50522186243da9998836127d05b7ae2c5f6b396c548ac",
"0x4c1a07c3c7b5611a3a276fac8420b96c04126ac44985efbdc8768ab3f8faa2f0",
"0xd2da804faacb07cd90dd41290ae66d9dcfd230cd5158d618204b76093b6b85bc",
"0x202a3a8caa4c35034d81de85a16526fdff96de1e2d71fbc5a545989a1d73147b",
"0x13fff05e80e4696b08aacea4720cd224885a3de7ab839ed3342fb11ad28c5d4c",
"0x07e3c53bdbbcfac4f330b9544e5e674396f14bd4a68d17d02756ed977f72eb95",
"0xd09fe3dc92a35cb0afea3c75a35ef512aacf83943ce64717bf1a07a2bba1c94c",
"0xc019f92b5296113c8f440e78dde31a7d6e7604369f330a0fb3618eab15a53e7b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

