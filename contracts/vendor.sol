pragma solidity ^0.4.23;

import "./participant.sol";

contract vendor is participant {

    address shipmentId;
    string name;
    string description;
    uint scheduledVolume;
    uint loadPrice;

    event LogShipment(
        string name,
        string description,
        uint volume,
        uint loadPrice
    );

    function addShipment(
        string _name,
        string _description,
        uint _volume,
        uint _loadPrice
    ) public {
        shipmentId = this;
        name = _name;
        description = _description;
        scheduledVolume = _volume;
        loadPrice = _loadPrice;

        emit LogShipment(
            _name,
            _description,
            _volume,
            _loadPrice
        );
    }

    function getShipment() view public returns (
        address,
        string,
        string,
        uint,
        uint) {
        return (shipmentId, name, description, scheduledVolume, loadPrice);
    }

}

