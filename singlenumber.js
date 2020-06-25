var singleNumber = function(nums) {
    var i, a = 0;
    for(i=0; i < nums.length; i++) {
        a ^= nums[i];
    }
    return a;
};

console.log(singleNumber([2, 2, 7, 3, 4, 4, 3]));