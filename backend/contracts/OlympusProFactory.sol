// SPDX-License-Identifier: MIT

pragma solidity 0.7.5;

import "../contracts/types/Ownable.sol";
import "../contracts/OlympusProCustomTreasury.sol";
import "../contracts/OlympusProCustomBond.sol";
import "../contracts/interfaces/IOlympusProFactoryStorage.sol";



contract OlympusProFactory is Ownable {
    
    /* ======== STATE VARIABLS ======== */
    
    address immutable public olympusTreasury;
    address immutable public olympusProFactoryStorage;
    address immutable public olumpusProSubsidyRouter;
    address immutable public olympusDAO;
    
    /* ======== CONSTRUCTION ======== */
    
    constructor(address _olympusTreasury, address _olympusProFactoryStorage, address _olumpusProSubsidyRouter, address _olympusDAO) {
        require( _olympusTreasury != address(0) );
        olympusTreasury = _olympusTreasury;
        require( _olympusProFactoryStorage != address(0) );
        olympusProFactoryStorage = _olympusProFactoryStorage;
        require( _olumpusProSubsidyRouter != address(0) );
        olumpusProSubsidyRouter = _olumpusProSubsidyRouter;
        require( _olympusDAO != address(0) );
        olympusDAO = _olympusDAO;
    }
    
    /* ======== POLICY FUNCTIONS ======== */
    
    /**
        @notice deploys custom treasury and custom bond contracts and returns address of both
        @param _payoutToken address
        @param _principleToken address
        @param _initialOwner address
        @return _treasury address
        @return _bond address
     */
    function createBondAndTreasury(address _payoutToken, address _principleToken, address _initialOwner, uint[] calldata _tierCeilings, uint[] calldata _fees) external onlyPolicy() returns(address _treasury, address _bond) {
    
        CustomTreasury treasury = new CustomTreasury(_payoutToken, _initialOwner);
        CustomBond bond = new CustomBond(address(treasury), _payoutToken, _principleToken, olympusTreasury, olumpusProSubsidyRouter, _initialOwner, olympusDAO, _tierCeilings, _fees);
        
        return IOlympusProFactoryStorage(olympusProFactoryStorage).pushBond(
            _payoutToken, _principleToken, address(treasury), address(bond), _initialOwner, _tierCeilings, _fees
        );
    }

    /**
        @notice deploys custom treasury and custom bond contracts and returns address of both
        @param _payoutToken address
        @param _principleToken address
        @param _customTreasury address
        @param _initialOwner address
        @return _treasury address
        @return _bond address
     */
    function createBond(address _payoutToken, address _principleToken, address _customTreasury, address _initialOwner, uint[] calldata _tierCeilings, uint[] calldata _fees ) external onlyPolicy() returns(address _treasury, address _bond) {

        CustomBond bond = new CustomBond(_customTreasury, _payoutToken, _principleToken, _customTreasury, olumpusProSubsidyRouter, _initialOwner, olympusDAO, _tierCeilings, _fees);

        return IOlympusProFactoryStorage(olympusProFactoryStorage).pushBond(
            _payoutToken, _principleToken, _customTreasury, address(bond), _initialOwner, _tierCeilings, _fees
        );
    }
    
}