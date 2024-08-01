let array=[4,8,2,11,6,7,10];

console.log(" Array : "+ array);

//finding array length
console.log("Array length : "+array.length);

//Find the maximum number in the array.
let maxNumber = Math.max(...array);
console.log("maximum number:" + maxNumber); 

//Calculate the sum of all elements in the array.
function sum(array) {
    let sum =0;

    for (let i = 0; i<array.length; i++)
        sum += array[i];

    return sum;
}
console.log("Sum of all elements: " + sum(array));

//Count the number of odd numbers in the array.
function countOddNumbers(array){
    let count =0;
    for (let i=0; i<array.length; i++){
        if(array[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
}
const numberOfOdds = countOddNumbers(array);
console.log("Count of odd numbers:" +numberOfOdds);