var numJewelsInStones = function(J, S) {
    var numjewels = 0;
    var i, j;
    for(i = 0; i < S.length; i++) {
        for(j = 0; j < J.length; j++) {
            if(S[i] == J[j]){
                numjewels += 1;
                console.log('found match');
            }
        }
    }
    return numjewels;
};

console.log(numJewelsInStones('aA', 'aAAbbb'));