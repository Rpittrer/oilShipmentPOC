pragma solidity ^0.4.23;

contract eventLogs {

    struct Events {
        uint time;
        uint date;
    }

    Events[] events;   // [0]=NOR [1]=startSail [2]=dockAtDischargePort [3]=unloaded

    function Reference() private {
        Events memory eventStruct;
        events.push(eventStruct);
    }

    function setNOR(uint _time, uint _date) public {
        Reference();
        Events storage aevent = events[0];
        // these references are writing to nums[]
        aevent.time = _time;
        aevent.date = _date;
    }

    function getNOR() public
    returns (uint time, uint date){
        Reference();
        // you get 2, true after setTwo() and 0, false before setTwo()
        return (events[0].time, events[0].date);
    }


    function setStartSail(uint _time, uint _date) public {
        Reference();
        Events storage aevent = events[1];
        // these references are writing to nums[]
        aevent.time = _time;
        aevent.date = _date;
    }

    function getStartSail() public
    returns (uint time, uint date){
        Reference();
        // you get 2, true after setTwo() and 0, false before setTwo()
        return (events[1].time, events[1].date);
    }

    function setDockAtDischargePort(uint _time, uint _date) public {
        Reference();
        Events storage aevent = events[2];
        // these references are writing to nums[]
        aevent.time = _time;
        aevent.date = _date;
    }

    function getDockAtDischargePort() public
    returns (uint time, uint date){
        Reference();
        // you get 2, true after setTwo() and 0, false before setTwo()
        return (events[2].time, events[2].date);
    }

    function setUnloaded(uint _time, uint _date) public {
        Reference();
        Events storage aevent = events[3];
        // these references are writing to nums[]
        aevent.time = _time;
        aevent.date = _date;
    }

    function getUnloaded() public
    returns (uint time, uint date){
        Reference();
        // you get 2, true after setTwo() and 0, false before setTwo()
        return (events[3].time, events[3].date);
    }
}

