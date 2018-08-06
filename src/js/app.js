App = {
    web3Provider: null,
    contracts: {},
    account: 0x0,
    loading: false,

    init: () => {
        return App.initWeb3();
    },

    initWeb3: () => {
        // initialize web3
        if (typeof web3 !== 'undefined') {
            //reuse the provider of the Web3 object injected by Metamask
            App.web3Provider = web3.currentProvider;
        } else {
            //create a new provider and plug it directly into our local node
            App.web3Provider = new Web3.providers.HttpProvider(
                'http://localhost:7545'
            );
        }
        web3 = new Web3(App.web3Provider);
        return App.initContract();
    },

    initContract: () => {
        $.getJSON('vendor.json', artifact => {
            // get the contract artifact file and use it to instantiate a truffle contract abstraction
            App.contracts.vendor = TruffleContract(artifact);
            // set the provider for our contracts
            App.contracts.vendor.setProvider(App.web3Provider);
            // listen to events
        });
    }
};
$(() => {
    $(window).load(() => {
        App.init();
    });
});
