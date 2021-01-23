let median = ()=>{
    let arr1 = [1,5,7];
    let arr2 = [2,3,9];
    let arr = arr1.concat(arr2);
    arr.sort();
    console.log(arr)
    let middle = arr[Math.floor((arr.length - 1) / 2)];

    console.log(middle);
};

median();


(()=>{
   let arr1 = [1,5,7];
    let arr2 = [2,3,9];
    let arr = arr1.concat(arr2);
    arr.sort();
    console.log(arr)
    let middle = arr[Math.floor((arr.length - 1) / 2)];

    console.log(middle); 
})()