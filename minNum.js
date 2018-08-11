function minNum(ahead, behind, startingPoint) {
    function securityCheck(...shouldBeNumber) {
        //Make sure all 3 parameters are numbers
         for (let i = 0; i < shouldBeNumber.length; i++) {
            if (typeof shouldBeNumber[i] !== 'number') return -1;
         };
    };

    function checkIfZero(...numbers) {
        //Check if the result will equal zero
        if (numbers[1] > (numbers[0] + numbers[2])) return 0;
    };

    function optomize(...numbers) {
        //Check for negative numbers
        if (numbers[0] < 1 || numbers[1] < 1) return -1;
        //Make sure behind has a chance
        if (ahead >= behind && (ahead - behind >= Math.abs(startingPoint))) return -1;
        //Make sure behind wont bust the constraints
        if (startingPoint >= behind * 100) return -1;
    };

    if (securityCheck(ahead, behind, startingPoint) === -1) return -1;
    if (checkIfZero(ahead, behind, startingPoint) === 0) return 0;
    if (optomize(ahead, behind, startingPoint) === -1) return -1;

    let accumulatorForAhead = startingPoint;
    let accumulatorForBehind = 0;

    for (var days = 1; days <= 100; days++) {
        accumulatorForAhead += ahead;
        accumulatorForBehind += behind;
        if (accumulatorForBehind > accumulatorForAhead) break;
    };

    return days > 100 ? -1 : days;
}

console.log('Should return 0', minNum(5, 6, 0));
console.log('Should return -1', minNum("3", 6, 0));
console.log('Should return -1', minNum(NaN, 6, 0));
console.log('Should return -1', minNum(0, 6, 0));
console.log('Should return -1', minNum(-1, 6, 0));
console.log('Should return -1', minNum(6, 5, -1));
console.log('Should return -1', minNum(3, 5, 500));
console.log('Should return -1', minNum(3, 5, 5000));
console.log('Should return -1', minNum(3, 6, 300));
console.log('Should return 1', minNum(6, 5, -2));
console.log('Should return 1', minNum(3, 5, 1));
console.log('Should return 2', minNum(4, 5, 1));
console.log('Should return 100', minNum(3, 6, 297));