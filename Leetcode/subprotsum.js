var subtractProductAndSum = function(n) {
    var sum = 0,
        prod = 1,
        cp = n;

    while(cp) {
        sum += cp % 10;
        prod *= cp % 10;
        cp = Math.floor(cp / 10);
    }
    return prod - sum;
};


console.log(subtractProductAndSum(1234));