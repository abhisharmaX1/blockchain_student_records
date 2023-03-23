const Web3 = require('web3');

const web3 = new Web3('http://127.0.0.1:7545');

// console.log(web3);

const privateKey = '0xf606dddfb524fc8f53e074b34b0ff074b15699947981aa986c25645b3900eed3';
const myAccount = web3.eth.accounts.wallet.add(privateKey);

// console.log(myAccount);

module.exports = {
    web3: web3,
    myAccount: myAccount
}