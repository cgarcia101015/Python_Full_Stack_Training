// var x = 1;
// var y = 2;
//
//
// // Exercise 1
// "2" == y && x === 1;
// // True
//
// //Exercise 2
// x >= 0 || y === "2";
// // True
//
// //Exercise 3
// !(x !== 1) && y === (1+1);
// //True
//
// //Exercise 4
// y !== "2" && x < 10;
// //True
//
// //Exercise 5
// y !== x || y == "2" || x === 3;
// //True

// var x = 1;
//
// while (x < 11) {
//     if (x%2 === 0) {
//         console.log(x);
//
//     }
//     x++;
// }

/// PART 8 - LOOP EXERCISES
// Before we continue on with your project, let's practice some loops!
// You'll have just two problems, but you'll need to use each loop type we
// learned about to solve them!


///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//
// Do this with a While Loop and a For Loop

// While Loop
var word = "hello";
var i = 0;

while (i < 5) {
    console.log(word);
    i++;
}

// For Loop
for (var i=1; i < 6; i++){
    console.log(word);
}



/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop
// var x = 1;
//
// while (x < 26) {
//     if (i%2 !== 0) {
//         console.log(x);
//
//     }
//     x++;
// }

// METHOD TWO
// For Loop
for (var i = 0; i <= 25; i++){
    if (i%2 !== 0) {
        console.log(i);
    }
}
