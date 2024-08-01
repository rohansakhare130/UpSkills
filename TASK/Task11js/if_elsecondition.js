/*   Check if a Number is Even or Odd     */ 

var number = 10;
var remainder;
var isEven;
var message;

remainder = number % 2;

if (remainder ===0){
    isEven = true;
    message = "The number " + number + " is even.";
} else {
    isEven = false;
    message = "The number " + number + " is odd.";
}

console.log(message);


// *useing two varible *//
// var number = 5;  
// var message;     

// // Use if-else statement to determine if the number is even or odd
// if (number % 2 === 0) {
//     message = "The number " + number + " is even.";
// } else {
//     message = "The number " + number + " is odd.";
// }


// console.log(message);