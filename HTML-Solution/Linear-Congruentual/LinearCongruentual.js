var seed = 3;
var a = 1103515245, c = 12345, m = 2 ** 31;

function generateRandomNumber() {
    seed = (a * seed + c) % m
    return seed
}

function generateRandomFloat() {
    return generateRandomNumber() / m;
}
var ctx = document.getElementById("canvas").getContext("2d")


function draw(i, j, temp) {
    ctx.fillStyle = `rgba(${temp},${temp},${temp},255)`
    ctx.fillRect(i, j, 1, 1)
}

let j = 0;
for (let i = 0; i < 500 * 500; i++) {
    let temp = Math.floor(generateRandomFloat() * 255)

    draw(i % 500, j, temp);
    console.log(`temp = ${temp}`);
    if (i % 500 === 0) {
        j++
    }
}

requestAnimationFrame(draw);