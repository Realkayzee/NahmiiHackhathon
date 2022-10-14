// SPDX-License-Identifier:MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract WKDDAI is ERC20, Ownable {
    constructor () ERC20("WKDDAI", "WKD-DAI"){
       _mint(msg.sender, 1000000e18);
    }

    function mint(uint256 amount) public onlyOwner {
        _mint(msg.sender, amount);
    }
}