// generate random number
const randomNumber = (min, max) => {
    randNum = Math.floor(Math.random() * max) + min;
    return randNum;
};

// function for store the randomNumber Previous, randomNumber and Random Number next element
const threeRilFil = (rill, a) => {
    x = rill - 1;
    y = rill;
    z = rill + 1;

    a.push(x);
    a.push(y);
    a.push(z);

    return a;
};

// init the array with random number
const initArray = (array, rillNumber1, rillNumber2, rillNumber3) => {
    for (let i = 0; i <= 2; i++) {
        let a = []; // use store the randomNumber Previous, randomNumber and Random Number next element
        for (let j = 0; j <= 2; j++) {
            if (i == 0) {
                // a1 for store the return value of threeRilFil
                let a1 = threeRilFil(rillNumber1, a);
                array[i][j] = a1[j];
            } else if (i == 1) {
                a1 = threeRilFil(rillNumber2, a);
                array[i][j] = a1[j];
            } else if (i == 2) {
                a1 = threeRilFil(rillNumber3, a);
                array[i][j] = a1[j];
            }
        }
    }

    // console.log(array);
};

// convert attractive slot number
// const slotConvertNum = (elements) => {
//     if (elements <= 9) {
//         elements = "0" + elements;
//     }

//     return elements;
// };

//arrange the symbols in matrix format
const spin = (array, rill1, rill2, rill3) => {
    console.log("Rill", rill1);
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            // process.stdout.write(`${array[i][j]}`);
            if (i == 0) {
                v = array[i][j];
                process.stdout.write(`  ${rill1[v]}`);
            } else if (i == 1) {
                v = array[i][j];
                process.stdout.write(`  ${rill2[v]}`);
            } else if (i == 2) {
                v = array[i][j];
                process.stdout.write(`  ${rill3[v]}`);
            }
        }

        // let arrEle = array[i][j];
        // console.log(arrEle);

        console.log("");
    }
};

// temporary for understanding
// const spin1 = (slots, syms) => {
//     for (let i = 0; i <= 2; i++) {
//         for (let j = 0; j <= 2; j++) {
//             // let arrEle = slots[i][j];
//             process.stdout.write(`  ${i}${j}`);
//         }

//         console.log("");
//     }
// };

var userScore = 0;

//store slots index value's first index like, 01 b store 0 and c store 1
let b;
let c;

//matching winning probability index in slots
const matchIndex = (array, slots, rill1, userScore) => {
    for (let i = 0; i < array.length; i++) {
        let x = 0; //for store elements of slots
        let count = 0; // count the number of matching elements
        for (let j = 0; j <= 2; j++) {
            let a = String(array[i][j]);
            if (a == 0 || a == 1 || a == 2) {
                a = "0" + a;
            }

            b = a[0];
            c = a[1];

            if (x == rill1[slots[b][c]]) {
                count++;
                if (count == 2) {
                    y = x;
                }
            } else {
                y = 0;
            }

            x = rill1[slots[b][c]];
        }
        if (y == "X") {
            userScore += 4;
        } else if (y == "A" || y == "B") {
            userScore += 3;
        } else if (y == "E" || y == "F") {
            userScore += 2;
        }
        // console.log(y);
    }
    // console.log("UserScore", userScore);
    return userScore;
};

module.exports = {
    randomNumber,
    initArray,
    spin,
    matchIndex,
    userScore,
};