var vendor = artifacts.require('./vendor.sol');
var inspector = artifacts.require('./inspector.sol');
var shipper = artifacts.require('./shipper.sol');
<<<<<<< HEAD
var shipowner = artifacts.require('./shipowner.sol');
var ownable = artifacts.require('./ownable.sol');
var eventDriver = artifacts.require('./evenDriver.sol');
=======
var vessel = artifacts.require('./vessel.sol');
var loadingPort = artifacts.require('./loadingPort.sol');
var dischargePort = artifacts.require('./dischargePort.sol');
>>>>>>> 8c605404f26107875cab90b984a1f62b0ca1e840

module.exports = (deployer) => {
    deployer.deploy(vendor);
    deployer.deploy(inspector);
    deployer.deploy(shipper);
<<<<<<< HEAD
    deployer.deploy(shipowner);
    deployer.deploy(ownable);
    deployer.deploy(eventDriver);
=======
    deployer.deploy(vessel);
    deployer.deploy(loadingPort);
    deployer.deploy(dischargePort);
>>>>>>> 8c605404f26107875cab90b984a1f62b0ca1e840
};
