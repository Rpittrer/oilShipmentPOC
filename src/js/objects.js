const Vendor = [
    {
        shipmentId: 123,
        description: 'NOR Tendered',
        location: 'Origin',
        date: "07/07/16",
        time: 2116
    },
    {
        shipmentId: 134,
        description: 'NOR Tendered',
        location: 'Destination',
        date: "03/08/16",
        time: 1123
    },
    {
        shipmentId: 145,
        description: 'Vessel Sailed',
        location: 'Destination',
        date: "05/08/16",
        time: 1200
    },
    {
        shipmentId: 845,
        description: 'Vessel Sailed',
        location: 'Origin',
        date: "04/07/18",
        time: 0100
    }
];
const Vessel = [
    {
        shipmentId: 234,
        description: 'NOR Tendered',
        location: 'Origin',
        date: "12/12/17",
        time: 0236
    },
    {
        shipmentId: 6434,
        description: 'NOR Tendered',
        location: 'Destination',
        date: "21/04/17",
        time: 1309
    },
    {
        shipmentId: 4325,
        description: 'Vessel Sailed',
        location: 'Destination',
        date: "30/03/18",
        time: 1703
    },
    {
        shipmentId: 7890,
        description: 'Vessel Sailed',
        location: 'Origin',
        date: "15/11/17",
        time: 0908
    }
];
const Inspector = [];
const LoadingPort = [];
const DischargePort = [];
const Shipper = [];

module.exports = {
    Vendor,
    Vessel,
    Inspector,
    LoadingPort,
    DischargePort,
    Shipper
};
