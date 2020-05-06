require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note pitch equip hidden kite metal gaze'; 
let testAccounts = [
"0xda3e8674374e08e37f2fe6a9a0bd49505fbdd8db8a315d1a7b34eace86e94ddb",
"0xd20d137dba314e87d6626b64005dec117641b8f034f5f15be7584f5dc1e03317",
"0xf7ff9f4d3ff9dd109c7db031319bc0fa4031d2a73c6d3bff7d5670538451deb2",
"0xaefd2be9c735cfa89285b275aabb2ba5f9f038dabd6c20ae1d1b1a2279bbf820",
"0xfb8bcc66cb7dad3b535f816c2da218a4bbc713429dba33eb736faa3cbc0a2455",
"0x3461c0409cd13408120d1c97729ad3658ac009b5fb04b7ca1e09484d180f7785",
"0xfe338edfbca928f40a1815748124c04389cb3f3cfa539cb0b33bb69407ccd217",
"0xd86709bd250ede49ef7cc35966845ad6f5c3c615b9ba5c868f106e086f701a41",
"0xd2a90c202aa5109428f798fa03cded710a5e33d43eef0fd5a898a3687d9c6269",
"0x0c6c0e2167d13ecec492abe09611a320a21c011785d81dfee68e5d989f78fef9"
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
            version: '^0.5.11'
        }
    }
};
