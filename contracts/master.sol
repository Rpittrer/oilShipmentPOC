// pragma solidity ^0.4.23;

// import "./vendor.sol";
// import "./vessel.sol";
// import "./shipper.sol";
// import "./loadingPort.sol";
// import "./dischargePort.sol";
// import "./inspector.sol";

// contract master {

//     function verfifyNOR(
//         address vendorAddress,
//         address vesselAddress,
//         address shipperAddress,
//         address loadingPortAddress,
//         address dischargePortAddress,
//         address inspectorAddress
//     ) public {
//         vendor ven = vendor(vendorAddress);
//         vessel ves = vessel(vesselAddress);
//         shipper ship = shipper(shipperAddress);
//         loadingPort load = loadingPort(loadingPortAddress);
//         dischargePort discharge = dischargePort(dischargePortAddress);
//         inspector inspec = inspector(inspectorAddress);

//         uint venTime;
//         uint venDate;
//         uint vesTime;
//         uint vesDate;
//         uint shipTime;
//         uint shipDate;
//         uint loadTime;
//         uint loadDate;
//         uint dischargeTime;
//         uint dischargeDate;
//         uint inspecTime;
//         uint inspecDate;

//         (venTime, venDate) = ven.getOriginNOR();
//         (vesTime, vesDate) = ves.getOriginNOR();
//         (shipTime, shipDate) = ship.getOriginNOR();
//         (loadTime, loadDate) = load.getOriginNOR();
//         (dischargeTime, dischargeDate) = discharge.getOriginNOR();
//         (inspecTime, inspecDate) = inspec.getOriginNOR();

//         bool dateCondition = dateVerify(venDate, vesDate, shipDate, loadDate, dischargeDate, inspecDate);
//         bool timeCondition = dateVerify(venTime, vesTime, shipTime, loadTime, dischargeTime, inspecTime);
//     }

//     function dateVerify(
//         uint d1,
//         uint d2,
//         uint d3,
//         uint d4,
//         uint d5,
//         uint d6
//     ) private view returns (bool){
//         bool condition;
//         if (d1 == d2 && d2 == d3 && d3 == d4 && d4 == d5 && d5 == d6) {//simple date verification function
//             condition = true;
//         }
//         else {
//             condition = false;
//         }
//         return condition;
//     }

//     function timeVerify(//this function will change in the future
//         uint t1,
//         uint t2,
//         uint t3,
//         uint t4,
//         uint t5,
//         uint t6
//     ) private view returns (bool){
//         bool condition;
//         uint timeAllowance;
//         if (t1 == t2 && t2 == t3 && t3 == t4 && t4 == t5 && t5 == t6) {//simple time verification function
//             condition = true;
//         }
//         else {
//             condition = false;
//         }
//         return condition;
//     }
// }

