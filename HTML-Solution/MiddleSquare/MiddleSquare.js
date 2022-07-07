var seed = 4665;

function randomFloatGenerator() {
    var EightDigitNum = (seed ** 2).toString();
    while (EightDigitNum.length < 8) {
        EightDigitNum = "0" + EightDigitNum;
    }
    seed = parseInt(EightDigitNum.substring(2, 6));
    console.log(`seed = ${seed}`);
    return seed / 9999;
}

const ctx = document.getElementsByTagName("canvas")[0].getContext("2d");

function draw(rNumber, j, i) {
    const color = Math.floor(255 * rNumber);
    ctx.fillStyle = `rgba(${color},${color},${color},255)`
    ctx.fillRect(i, j, 1, 1)
    console.log(`rNumber = ${rNumber} and color = ${color} , iteration num ${i + j}`)
}

let j = 0;
for (let i = 0; i <= 56 * 56; i++) {

    const rNumber = randomFloatGenerator();
    draw(rNumber, j, i % 56)
    if (i % 56 == 0) {
        j++
    }
}
requestAnimationFrame(draw);
