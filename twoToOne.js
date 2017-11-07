function longest(s1, s2) {
    s1 = s1.split("");
    s2 = s2.split("");
    
    var concatArr = s1.concat(s2).sort();
    var alphabetArr = [];
    
    for(var i=0; i<concatArr.length; i++) {
        if (alphabetArr.indexOf(concatArr[i]) === -1) {
            alphabetArr.push(concatArr[i]);
        }
    }
    alphabetArr = alphabetArr.join("");
    return alphabetArr;
}