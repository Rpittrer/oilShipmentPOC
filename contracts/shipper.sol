pragma solidity ^0.4.23;

contract shipper {

    string origin;
    string destination;

    struct Events {
        uint time;
        uint date;
        uint actualVolume;
    }

    Events[] events;
    //  [0]=setOriginNOR
    //  [1]=setOriginSail
    //  [2]=setDestinationNOR 
    //  [3]=setDestinationSail

    function Reference() private {
        Events memory eventStruct;
        events.push(eventStruct);
    }

    ////////////////////////////////////////////////////////
    // Origin
    ////////////////////////////////////////////////////////

    function addOrigin(string _origin) public {
        origin = _origin;
    }

    function getOrigin() public view returns (string){
        return origin;
    }

    function addDestination(string _destination) public {
        destination = _destination;
    }

    function getDestination() public view returns (string){
        return destination;
    }

    function setOriginNOR(uint _time, uint _date) public {
        Reference();
        Events storage aevent = events[0];
        // these references are writing to events[]
        aevent.time = _time;
        aevent.date = _date;
    }

    function getOriginNOR() public view
    returns (uint time, uint date){
        return (events[0].time, events[0].date);
    }

    function setOriginSail(uint _time, uint _date, uint _actualVolume) public {
        Reference();
        Events storage aevent = events[1];
        // these references are writing to events[]
        aevent.time = _time;
        aevent.date = _date;
        aevent.actualVolume = _actualVolume;
    }

    function getOriginSail() public view
    returns (uint time, uint date, uint actualVolume){
        return (events[1].time, events[1].date, events[1].actualVolume);
    }


    ////////////////////////////////////////////////////////
    // Destination
    ////////////////////////////////////////////////////////


    function setDestinationNOR(uint _time, uint _date) public {
        Reference();
        Events storage aevent = events[2];
        // these references are writing to events[]
        aevent.time = _time;
        aevent.date = _date;
    }

    function getDestinationNOR() public view
    returns (uint time, uint date){
        return (events[2].time, events[2].date);
    }

    function setDestinationSail(uint _time, uint _date, uint _actualVolume) public {
        Reference();
        Events storage aevent = events[3];
        // these references are writing to events[]
        aevent.time = _time;
        aevent.date = _date;
        aevent.actualVolume = _actualVolume;
    }

    function getDestinationSail() public view
    returns (uint time, uint date, uint actualVolume){
        return (events[3].time, events[3].date, events[3].actualVolume);
    }
}

