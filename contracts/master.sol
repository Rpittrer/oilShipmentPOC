pragma solidity ^0.4.23;

import "./vendor.sol";
import "./vessel.sol";
import "./shipper.sol";
import "./loadingPort.sol";
import "./dischargePort.sol";
import "./inspector.sol";

contract master {
    
    function verfify(
        address vendorAddress,
        address vesselAddress,
        address shipperAddress,
        address loadingPortAddress,
        address dischargePortAddress,
        address inspectorAddress
        ) public {
        vendor ven = vendor(vendorAddress);
        vessel ves = vessel(vesselAddress);
        shipper ship= shipper(shipperAddress);
        loadingPort load = loadingPort(loadingPortAddress);
        dischargePort discharge = dischargePort(dischargePortAddress);
        inspector inpec = inspector(inspectorAddress);
          
    }

    function dateVerify(
        uint d1,
        uint d2
        ) {
        
    }
}

