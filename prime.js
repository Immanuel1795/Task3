let numbers = [2, 3, 4, 15 , 17, 19 , 22 , 26, 25, 27 , 31];

let primeNumbers = (numbers)=>{
    var newNumbers = numbers.filter(primeNum=>{
        for (var i = 2; i <= Math.sqrt(primeNum); i++) {
    if (primeNum % i === 0) return false;
  }
  return true;
    })
    
    console.log(newNumbers);
}

primeNumbers(numbers);

(numbers=>{
    var newNumbers = numbers.filter(primeNum=>{
        for (var i = 2; i <= Math.sqrt(primeNum); i++) {
    if (primeNum % i === 0) return false;
  }
  return true;
    })
    
    console.log(newNumbers);
}) (numbers)