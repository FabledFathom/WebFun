var a = 1;
var b = 100;

for(var i=1; i<=100; i++) {
    if(i%3 == true && i%5 == true){
        console.log("FizzBuzz");
    }
    if(i%3 == true){
        console.log("Fizz");
    }
    else if(i%5 == true){
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
// if(i%5 == true i%3 true){
//     print = "FizzBuzz";
// }

// a % b