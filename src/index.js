'use strict'

const fibonacci = () => {
    let seqFibonacci = [1, 0];
    while (seqFibonacci[0] < 350) {
        let lastTerm = seqFibonacci[0] + seqFibonacci[1];
        seqFibonacci.unshift(lastTerm);  
    }
    return seqFibonacci.reverse();
}

const isFibonnaci = num => fibonacci().includes(num); 

module.exports = {
    fibonacci,
    isFibonnaci
}
