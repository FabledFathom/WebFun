// #1

// function alwaysHungry(arr) {
//     for(var i=0; i<=arr.length; i++){
//         if(arr[i] === "food"){
//             console.log("yummy");
//         }
//         else{
//             console.log("I'm hungry");
//         }
//     }
// }

// alwaysHungry([3.14, "food", "pie", true, "food"]);
// alwaysHungry([4, 1, 5, 7, 2]);

// #2

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i < arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push.arr[i];
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// #3

// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     // your code here
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result);

// #4

// function reverse(arr) {
//     // your code here
//     return arr;
// }

// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result);

// #5

// function fibonacciArray(n) {
//     var fibArr = [0, 1];
//     // your code here
//     return fibArr;
// }

// var result = fibonacciArray(10);
// console.log(result);

