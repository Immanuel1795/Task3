let numbers = [12, 5, 2 ,55, 45, 70, 95];

let oddAnonymous = (num)=>{
  const newnumbers = num.filter(oddNumbers =>{
      return oddNumbers%2 !==0;
  })
   
  console.log(newnumbers);
}

oddAnonymous(numbers);

((num)=>{
    const newnumbers = num.filter(oddNumbers =>{
       return oddNumbers%2 !==0;
   })
   
   console.log(newnumbers);
    
}) (numbers)