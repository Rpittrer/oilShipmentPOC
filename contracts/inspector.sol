pragma solidity ^0.4.23;

contract inspector {

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
        // these references are writing to nums[]
        aevent.time = _time;
        aevent.date = _date;
    }

    // function getSlotZero() public
    // returns (uint time, uint date){
    //     Reference();
    //     // you get 2, true after setTwo() and 0, false before setTwo()
    //     return (events[0].time, events[0].date);
    // }
}

