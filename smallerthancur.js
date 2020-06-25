var smallerNumbersThanCurrent = function(nums) {
    var ret = [];
    var i, j, current, greaterthan;
    for(i = 0; i < nums.length; i++) {
        current=nums[i];
        greaterthan = 0;
        for(j = 0; j < nums.length; j++) {
            if(current > nums[j]){
                greaterthan = greaterthan + 1;
            }
            if(j == (nums.length - 1)) {
                ret.push(greaterthan);
            }
        }
    }
    return ret;
};

console.log(smallerNumbersThanCurrent([8, 7, 4, 2, 1]));