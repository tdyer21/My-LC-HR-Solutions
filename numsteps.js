/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    var mnum = num;
    var steps = 0
    while(mnum != 0){
        if(mnum % 2 == 0) {
            mnum /= 2;
            steps += 1;
        } else {
            mnum -= 1;
            steps += 1;
        }
    }
    
    return steps;
};