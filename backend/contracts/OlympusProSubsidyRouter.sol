// SPDX-License-Identifier: MIT

pragma solidity 0.7.5;

import "../contracts/types/Ownable.sol";
import "../contracts/interfaces/IBond.sol";

contract OPSubsidyRouter is Ownable {

    mapping( address => address ) public bondForController; // maps bond contract managed by subsidy controller

    /**
     *  @notice subsidy controller fetches and resets payout counter
     *  @return uint
     */
    function getSubsidyInfo() external returns ( uint ) {
        require( bondForController[ msg.sender ] != address(0), "Address not mapped" );
        return IBond( bondForController[ msg.sender ] ).paySubsidy();
    }

    /**
     *  @notice add new subsidy controller for bond contract
     *  @param _bond address
     *  @param _subsidyController address
     */
    function addSubsidyController( address _bond, address _subsidyController ) external onlyPolicy() {
        require( _bond != address(0) );
        require( _subsidyController != address(0) );

        bondForController[ _subsidyController ] = _bond;
    }

    /**
     *  @notice remove subsidy controller for bond contract
     *  @param _subsidyController address
     */
    function removeSubsidyController( address _subsidyController ) external onlyPolicy() {
        bondForController[ _subsidyController ] = address(0);
    }
}