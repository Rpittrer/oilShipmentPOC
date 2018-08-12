pragma solidity ^0.4.23;

import "./vendor.sol";
import "./vessel.sol";
import "./shipper.sol";
import "./loadingPort.sol";
import "./dischargePort.sol";
import "./inspector.sol";

contract master {
   
    bool dateVerification = false;

    function verfifyNOR(
        address vendorAddress,
        address vesselAddress,
        address shipperAddress,
        address loadingPortAddress,
        address dischargePortAddress,
        address inspectorAddress
    ) public {
        vendor ven = vendor(vendorAddress);
        vessel ves = vessel(vesselAddress);
        shipper ship = shipper(shipperAddress);
        loadingPort load = loadingPort(loadingPortAddress);
        dischargePort discharge = dischargePort(dischargePortAddress);
        inspector inspec = inspector(inspectorAddress);

        dateVerification = dateVerify(
            ven.getOriginNOR(),
            ves.getOriginNOR(),
            ship.getOriginNOR(),
            load.getOriginNOR(),
            discharge.getOriginNOR(),
            inspec.getOriginNOR()
        );
    }

    function dateVerify(
        uint d1,
        uint d2,
        uint d3,
        uint d4,
        uint d5,
        uint d6
    ) private pure returns (bool){
        bool condition;
        if (d1 == d2 && d2 == d3 && d3 == d4 && d4 == d5 && d5 == d6) {//simple date verification function
            condition = true;
        }
        else {
            condition = false;
        }
        return condition;
    }
}

