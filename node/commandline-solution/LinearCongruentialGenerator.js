
var seed = 3;
var a = 1103515245, c = 12345, m = 2 ** 31;

/* The LCG algorithm - 
its used by many programming languages java , c++ , gcc
generate upto a million random numbers.
linear as in a line , congruential meaning division using modulo operator.
the a,c,m,seed values used by c++ and other languages are available on wikipedia. 
note-
not meant to be used for security purposes ie. cyptography.
*/

function generateRandomNumber() {
    seed = (a * seed + c) % m
    return seed
}

function generateRandomFloat() {
    return generateRandomNumber() / m;
}

for (let i = 0; i < 100; i++) {
    console.log(generateRandomFloat());
}