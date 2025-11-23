function makeMultiplier(m){return function(n){return n*m;};}
const triple=makeMultiplier(3);
console.log(triple(5));
