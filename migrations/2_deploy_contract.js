var vendor = artifacts.require('./vendor.sol');
var inspector = artifacts.require('./inspector.sol');
var shipper = artifacts.require('./shipper.sol');
var vessel = artifacts.require('./vessel.sol');
var ownable = artifacts.require('./ownable.sol');
var eventDriver = artifacts.require('./evenDriver.sol');

module.exports = function(deployer) {
    deployer.deploy(vendor);
    deployer.deploy(inspector);
    deployer.deploy(shipper);
    deployer.deploy(vessel);
    deployer.deploy(ownable);
    deployer.deploy(eventDriver);
};
