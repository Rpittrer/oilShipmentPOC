const App = {
  web3Provider: null,
  contracts: {},
  account: 0x0,
  loading: false,

  init: () => App.initWeb3(),

  initWeb3: () => {
    // initialize web3
    if (typeof web3 !== 'undefined') {
      // reuse the provider of the Web3 object injected by Metamask
      App.web3Provider = web3.currentProvider;
    } else {
      // create a new provider and plug it directly into our local node
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);
    return App.initContract();
  },

  initContract: () => {
    $.when(
      $.getJSON('../../build/contracts/vendor.json'),
      $.getJSON('../../build/contracts/vessel.json'),
      $.getJSON('../../build/contracts/shipper.json'),
      $.getJSON('../../build/contracts/inspector.json'),
      $.getJSON('../../build/contracts/loadingPort.json'),
      $.getJSON('../../build/contracts/dischargePort.json'),
    ).done((_vendor, _vessel, _shipper, _inspector, _loading, _discharge) => {
      // get the contract artifact file and use it to instantiate a truffle contract abstraction
      // set the provider for our contracts
      App.contracts.vendor = TruffleContract(_vendor);
      App.contracts.vendor.setProvider(App.web3Provider);

      App.contracts.vessel = TruffleContract(_vessel);
      App.contracts.vessel.setProvider(App.web3Provider);

      App.contracts.shipper = TruffleContract(_shipper);
      App.contracts.shipper.setProvider(App.web3Provider);

      App.contracts.inspector = TruffleContract(_inspector);
      App.contracts.inspector.setProvider(App.web3Provider);

      App.contracts.loadingPort = TruffleContract(_loading);
      App.contracts.loadingPort.setProvider(App.web3Provider);

      App.contracts.dischargePort = TruffleContract(_discharge);
      App.contracts.dischargePort.setProvider(App.web3Provider);
    });
  },
};
$(document).ready(() => {
  App.init();
});
