const Web3 = require("web3");
const ethNetwork ="https://rinkeby.infura.io/v3/05b11ce7774349e387ad9e2d08629a95";
const web3 =new Web3(new Web3.providers.HttpProvider(ethNetwork));


// fetching balance from my Metamask wallet
web3.eth.getBalance('0xBAa6c11CB25B013791CbcE6Cf26036cc5c369D77', async(result, error)=>{
    if (result){
        let balance= web3.utils.fromWei(result, 'ether');
        console.log(`My balance is ${balance} ETH`);
    }
    console.log(error);
})