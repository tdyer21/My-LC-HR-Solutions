/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    var i;
    var nums = []
    for (i=0; i < n; i++){
        nums.push(start + 2*i);
    }
    var bitacc = 0;
    for (i=0; i < n; i++){
        bitacc = (bitacc ^ nums[i]);
    }
    console.log(nums)
    return bitacc;
    //
    
};