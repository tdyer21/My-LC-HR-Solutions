var twoSum = function(nums, target) {
    let idxmap = new Map();
    var result = [];

    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let comp = target - num;

        if(idxmap.has(comp)) {
            result[0] = idxmap.get(comp);
            result[1] = i;
            return result;
        } else {
            idxmap.set(num, i);
        }
    }

    return result;
}