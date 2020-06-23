/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var tfarr = [];
    var largestnum = candies[candies.length-1];
    for(let i = 0; i < candies.length; i++) {
        if(candies[i] > largestnum){
            largestnum = candies[i];
        }
    }
    for(let i = 0; i < candies.length; i++) {
        if((candies[i] + extraCandies) >= largestnum){
            tfarr.push(true);
        } else {
            tfarr.push(false);
        }
    }
    return tfarr;
};