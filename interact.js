const {web3, myAccount} = require('./utils');
const {abi, address} = require('./contractArtifacts');

let contract = new web3.eth.Contract(JSON.parse(abi), address);

// console.log(contract);

async function addStudent(name, age, branch) {
    let r = await contract.methods.addStudent(name, age, branch).send({
        from: myAccount.address,
        gas: 800000
    })
    return r.transactionHash;
}

async function getStudent(id) {
    let r = await contract.methods.getStudent(id).call();
    return r[1];
}

// addStudent();
// getStudent(2);
// getStudent(3);
// getStudent(1);

// for interacting with the browser
window.addEventListener('load', () => {
  document.getElementById("add").onclick = () => {
    _name = document.getElementById("_name").value
    _age = document.getElementById("age").value
    _branch = document.getElementById("branch").value
    addStudent(_name, _age, _branch).then((r) => {
      document.getElementById("resultOfSet").innerHTML = r
    })
  }
  document.getElementById("get").onclick = () => {
    val = document.getElementById("value").value
    getStudent(val).then((r) => {
      document.getElementById("resultOfGet").innerHTML = r
    })
  }
})