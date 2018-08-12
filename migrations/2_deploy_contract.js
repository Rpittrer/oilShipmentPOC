var vendor = artifacts.require('./vendor.sol');
var inspector = artifacts.require('./inspector.sol');
var shipper = artifacts.require('./shipper.sol');
var vessel = artifacts.require('./vessel.sol');
var loadingPort = artifacts.require('./loadingPort.sol');
var dischargePort = artifacts.require('./dischargePort.sol');

module.exports = (deployer) => {
    deployer.deploy(vendor);
    deployer.deploy(inspector);
    deployer.deploy(shipper);
    deployer.deploy(vessel);
    deployer.deploy(loadingPort);
    deployer.deploy(dischargePort);
};
