const divideNumbers = (numerator,denominator) =>{
    return new Promise((resolve, reject) => {
        if(denominator === 0){
            reject("Division by zero is not allowed")
        }else{
            resolve(numerator / denominator);
        }
    })
}

const testCase = [
    {numerator:10, denominator:5},
    {numerator:10, denominator:0},
]


testCase.forEach((testCase, index) => {
    divideNumbers(testCase.numerator, testCase.denominator)
        .then(result => {
            console.log(`Test case ${index + 1}: ${testCase.numerator} / ${testCase.denominator} = ${result}`);
        })
        .catch(error => {
            console.error(`Test case ${index + 1}: ${error}`);
        });
});