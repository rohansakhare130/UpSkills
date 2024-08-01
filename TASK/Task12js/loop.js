const number = 153;
console.log("Give Number:", number);

let sum = 0;
let tempNumber = number;

// Calculate the sum of digits
while (tempNumber > 0) {
  sum += tempNumber % 10;
  tempNumber = Math.floor(tempNumber / 10);
}

console.log("Sum of digits:", sum);  // o/p

// Check if it's an Armstrong number
tempNumber = number; //reset tempNumber to the original number
let armstrongSum = 0;
while (tempNumber > 0) {
  let digit = tempNumber % 10;
  armstrongSum += Math.pow(digit, 3);
  tempNumber = Math.floor(tempNumber / 10);
}
const isArmstrong = armstrongSum === number;

console.log("Is Armstrong Number:", isArmstrong); // o/p

// Check if it's a prime number
let isPrime = true;
if (number <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}
console.log("Is Prime Number:", isPrime); // o/p

// Find factors
const factors = [];
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    factors.push(i);
  }
}
console.log("Factors:", factors); // o/p
