const utility = require("./utility");

const readLineSync = require("readline-sync");

console.log(" (1) Spin\n", "(2) Score\n");
console.log("For exit you can press Ctrl + C\n");

//store user score & owner score
var userScore = 0;
var owenerScore = 0;

//total symnols
var syms = ["X", "A", "B", "E", "F"];

//Symbols for each rills
let rill1 =
    (rill2 =
        rill3 = ["X", "X", "A", "B", "A", "E", "F", "E", "F", "E"]);

// declare multidimensional array
const m = 3;
const n = 3;

let slots = new Array(m);

for (var i = 0; i < m; i++) {
    slots[i] = new Array(n);
}

//winning Possibility indexes
let winInx = [
    [00, 10, 20],
    [01, 11, 21],
    [02, 12, 22],
    [00, 01, 02],
    [10, 11, 12],
    [20, 21, 22],
    [00, 11, 22],
    [02, 11, 20],
];

let userScore1 = 0; // userscore final calculation return from function

while ("Stop") {
    //userinput in console
    const selectOption = readLineSync.question(
        "Select any one Options that given in below\n"
    );

    if (selectOption === "Spin") {
        owenerScore += 2;

        //random Number for each rill
        const rill1Rand = utility.randomNumber(2, 7);
        const rill2Rand = utility.randomNumber(2, 7);
        const rill3Rand = utility.randomNumber(2, 7);

        // init the array with random number
        utility.initArray(slots, rill1Rand, rill2Rand, rill3Rand);

        //arrange the symbols in matrix format
        utility.spin(slots, rill1, rill2, rill3);

        userScore1 += utility.matchIndex(winInx, slots, rill1, userScore);

        console.log(`User Score= ${userScore1}`);
        console.log(`Owner Score:=${owenerScore} `);
    } else {
        console.log("Please select Valid options");
    }
}