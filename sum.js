let numbers = [10, 10, 10, 70];

let sumOfNumbers = (numbers)=>{
    return numbers.reduce((a, b) => a + b, 0);
}

let result = sumOfNumbers(numbers);
console.log(result);

((numbers)=>{
    console.log (numbers.reduce((a, b) => a + b, 0));
}) (numbers)