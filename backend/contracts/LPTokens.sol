// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LP is ERC20("LPT", "LP"){
    constructor(){
        _mint(msg.sender, 10000000e18);
    }
}