(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = {
  bytecode: "0x608060405234801561001057600080fd5b50610d30806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806306ead22e14610067578063642f91631461009a57806368433a3a146100cd578063b645307d146100eb578063c11e15e414610107578063ed32a8a114610123575b600080fd5b610081600480360381019061007c919061060c565b61013f565b60405161009194939291906106d8565b60405180910390f35b6100b460048036038101906100af919061060c565b61027f565b6040516100c494939291906106d8565b60405180910390f35b6100d5610404565b6040516100e2919061072b565b60405180910390f35b6101056004803603810190610100919061060c565b61040a565b005b610121600480360381019061011c919061087b565b610452565b005b61013d6004803603810190610138919061091a565b6104ce565b005b6000602052806000526040600020600091509050806000015490806001018054610168906109d4565b80601f0160208091040260200160405190810160405280929190818152602001828054610194906109d4565b80156101e15780601f106101b6576101008083540402835291602001916101e1565b820191906000526020600020905b8154815290600101906020018083116101c457829003601f168201915b5050505050908060020154908060030180546101fc906109d4565b80601f0160208091040260200160405190810160405280929190818152602001828054610228906109d4565b80156102755780601f1061024a57610100808354040283529160200191610275565b820191906000526020600020905b81548152906001019060200180831161025857829003601f168201915b5050505050905084565b600060606000606060008086815260200190815260200160002060000154600080878152602001908152602001600020600101600080888152602001908152602001600020600201546000808981526020019081526020016000206003018280546102e9906109d4565b80601f0160208091040260200160405190810160405280929190818152602001828054610315906109d4565b80156103625780601f1061033757610100808354040283529160200191610362565b820191906000526020600020905b81548152906001019060200180831161034557829003601f168201915b50505050509250808054610375906109d4565b80601f01602080910402602001604051908101604052809291908181526020018280546103a1906109d4565b80156103ee5780601f106103c3576101008083540402835291602001916103ee565b820191906000526020600020905b8154815290600101906020018083116103d157829003601f168201915b5050505050905093509350935093509193509193565b60015481565b6000808281526020019081526020016000206000808201600090556001820160006104359190610565565b600282016000905560038201600061044d9190610565565b505050565b6040518060800160405280858152602001848152602001838152602001828152506000808681526020019081526020016000206000820151816000015560208201518160010190816104a49190610bb1565b506040820151816002015560608201518160030190816104c49190610bb1565b5090505050505050565b600160008154809291906104e190610cb2565b91905055506040518060800160405280600154815260200184815260200183815260200182815250600080600154815260200190815260200160002060008201518160000155602082015181600101908161053c9190610bb1565b5060408201518160020155606082015181600301908161055c9190610bb1565b50905050505050565b508054610571906109d4565b6000825580601f1061058357506105a2565b601f0160209004906000526020600020908101906105a191906105a5565b5b50565b5b808211156105be5760008160009055506001016105a6565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6105e9816105d6565b81146105f457600080fd5b50565b600081359050610606816105e0565b92915050565b600060208284031215610622576106216105cc565b5b6000610630848285016105f7565b91505092915050565b610642816105d6565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610682578082015181840152602081019050610667565b60008484015250505050565b6000601f19601f8301169050919050565b60006106aa82610648565b6106b48185610653565b93506106c4818560208601610664565b6106cd8161068e565b840191505092915050565b60006080820190506106ed6000830187610639565b81810360208301526106ff818661069f565b905061070e6040830185610639565b8181036060830152610720818461069f565b905095945050505050565b60006020820190506107406000830184610639565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6107888261068e565b810181811067ffffffffffffffff821117156107a7576107a6610750565b5b80604052505050565b60006107ba6105c2565b90506107c6828261077f565b919050565b600067ffffffffffffffff8211156107e6576107e5610750565b5b6107ef8261068e565b9050602081019050919050565b82818337600083830152505050565b600061081e610819846107cb565b6107b0565b90508281526020810184848401111561083a5761083961074b565b5b6108458482856107fc565b509392505050565b600082601f83011261086257610861610746565b5b813561087284826020860161080b565b91505092915050565b60008060008060808587031215610895576108946105cc565b5b60006108a3878288016105f7565b945050602085013567ffffffffffffffff8111156108c4576108c36105d1565b5b6108d08782880161084d565b93505060406108e1878288016105f7565b925050606085013567ffffffffffffffff811115610902576109016105d1565b5b61090e8782880161084d565b91505092959194509250565b600080600060608486031215610933576109326105cc565b5b600084013567ffffffffffffffff811115610951576109506105d1565b5b61095d8682870161084d565b935050602061096e868287016105f7565b925050604084013567ffffffffffffffff81111561098f5761098e6105d1565b5b61099b8682870161084d565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806109ec57607f821691505b6020821081036109ff576109fe6109a5565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610a677fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610a2a565b610a718683610a2a565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610aae610aa9610aa4846105d6565b610a89565b6105d6565b9050919050565b6000819050919050565b610ac883610a93565b610adc610ad482610ab5565b848454610a37565b825550505050565b600090565b610af1610ae4565b610afc818484610abf565b505050565b5b81811015610b2057610b15600082610ae9565b600181019050610b02565b5050565b601f821115610b6557610b3681610a05565b610b3f84610a1a565b81016020851015610b4e578190505b610b62610b5a85610a1a565b830182610b01565b50505b505050565b600082821c905092915050565b6000610b8860001984600802610b6a565b1980831691505092915050565b6000610ba18383610b77565b9150826002028217905092915050565b610bba82610648565b67ffffffffffffffff811115610bd357610bd2610750565b5b610bdd82546109d4565b610be8828285610b24565b600060209050601f831160018114610c1b5760008415610c09578287015190505b610c138582610b95565b865550610c7b565b601f198416610c2986610a05565b60005b82811015610c5157848901518255600182019150602085019450602081019050610c2c565b86831015610c6e5784890151610c6a601f891682610b77565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610cbd826105d6565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610cef57610cee610c83565b5b60018201905091905056fea2646970667358221220abb34e1f27956885ef3c35bbb8eefbd348f1fb42f6b8512a082a5e69200b259c64736f6c63430008130033",
  abi: `[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_age","type":"uint256"},{"internalType":"string","name":"_branch","type":"string"}],"name":"addStudent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"deleteStudent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getStudent","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"students","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"age","type":"uint256"},{"internalType":"string","name":"branch","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"studentsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_age","type":"uint256"},{"internalType":"string","name":"_branch","type":"string"}],"name":"updateStudent","outputs":[],"stateMutability":"nonpayable","type":"function"}]`,
  address: '0x18cA30c6f95bC3243Cb6a449464cC361DDB53c67'
};

},{}],2:[function(require,module,exports){
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
},{"./contractArtifacts":1,"./utils":6}],3:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],4:[function(require,module,exports){
(function (setImmediate,clearImmediate){
var nextTick = require('process/browser.js').nextTick;
var apply = Function.prototype.apply;
var slice = Array.prototype.slice;
var immediateIds = {};
var nextImmediateId = 0;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) { timeout.close(); };

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// That's not how node.js implements it but the exposed api is the same.
exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
  var id = nextImmediateId++;
  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

  immediateIds[id] = true;

  nextTick(function onNextTick() {
    if (immediateIds[id]) {
      // fn.call() is faster so we optimize for the common use-case
      // @see http://jsperf.com/call-apply-segu
      if (args) {
        fn.apply(null, args);
      } else {
        fn.call(null);
      }
      // Prevent ids from leaking
      exports.clearImmediate(id);
    }
  });

  return id;
};

exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
  delete immediateIds[id];
};
}).call(this,require("timers").setImmediate,require("timers").clearImmediate)
},{"process/browser.js":3,"timers":4}],5:[function(require,module,exports){
(function (setImmediate){
/*! For license information please see web3.min.js.LICENSE.txt */

}).call(this,require("timers").setImmediate)
},{"timers":4}],6:[function(require,module,exports){
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
},{"web3":5}]},{},[2]);