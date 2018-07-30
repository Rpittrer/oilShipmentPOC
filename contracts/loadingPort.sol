pragma solidity ^0.4.23;

contract loadingPort {
    

    struct Events {
        uint time;
        uint date;
    }

    Events[] events;   // [0]=NOR [1]=startSail [2]=dockAtDestination [3]=unloaded

    function Reference() private {
        Events memory eventStruct;
        events.push(eventStruct);
    }

    function setNOR(uint _time, uint _date) public {
        Reference();
        Events storage aevent = events[0];
        // these references are writing to events[]
        aevent.time = _time;
        aevent.date = _date;
    }

    function getNOR() public
    returns (uint time, uint date){
        Reference();
        return (events[0].time, events[0].date);
    }


    function setStartSail(uint _time, uint _date) public {
        Reference();
        Events storage aevent = events[1];
        // these references are writing to events[]
        aevent.time = _time;
        aevent.date = _date;
    }

    function getStartSail() public
    returns (uint time, uint date){
        Reference();
        return (events[1].time, events[1].date);
    }

    function setDockAtDestination(uint _time, uint _date) public {
        Reference();
        Events storage aevent = events[2];
        // these references are writing to events[]
        aevent.time = _time;
        aevent.date = _date;
    }

    function getDockAtDestination() public
    returns (uint time, uint date){
        Reference();
        return (events[2].time, events[2].date);
    }

    function setUnloaded(uint _time, uint _date) public {
        Reference();
        Events storage aevent = events[3];
        // these references are writing to events[]
        aevent.time = _time;
        aevent.date = _date;
    }

    function getUnloaded() public
    returns (uint time, uint date){
        Reference();
        return (events[3].time, events[3].date);
    }
}

