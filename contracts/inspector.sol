pragma solidity ^0.4.23;

contract inspector {

    struct NumberStruct {
        uint number;
        bool isCurrent;
    }

    NumberStruct[] nums;

    function Reference() private {
        NumberStruct memory numberStruct;
        nums.push(numberStruct);
    }

    function setTwo() public {
        Reference();
        NumberStruct storage aNumberStruct = nums[0];
        // these references are writing to nums[]
        aNumberStruct.number = 2;
        aNumberStruct.isCurrent = true;
    }

    function getSlotZero() public
    returns (uint number, bool isCurrent){
        Reference();
        // you get 2, true after setTwo() and 0, false before setTwo()
        return (nums[0].number, nums[0].isCurrent);
    }
}

