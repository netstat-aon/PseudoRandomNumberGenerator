var seed = 1234;  // by changing the seed you can decide how many random numbers you generate before you start generating same sequence of random numbers in a loop.

function* generateRandomNumber() {
    while (true) {
        let seed2 = seed ** 2 + ""
        while (seed2.length < 8) {
            seed2 = "0" + seed2;
        }
        seed = parseInt(seed2.substring(2, 6))
        yield seed;
    }


}
let generator = generateRandomNumber();
let ob = {}
let i = 0;

//this for loop will only run for 57 iterations and stop
for (; i < 100; i++) {
    let temp = generator.next().value
    if (ob[temp]) {
        console.log(`program breaks after ${i} iterations due to possible duplicate ${temp}`);
        /* Psuedo random numbers are not entirely random, they tend to repeat after a certain amount of iterations.
         why? due to the fact that  we are just giving different inputs to the same equation and at any point if the input becomes the same the output becomes the same
         and since the output of the previous iteration is considered as the input for the next iteration it'll result in the same sequence of numbers since you last gave that input*/
        break;
    }
    console.log(temp) // where as this gives a max of four digit random number
    console.log(temp / 9999) // this will generate random numbers from 0-1


    ob[temp] = true;
}
