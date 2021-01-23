let nums = [1,2,3,4,5,6,7];

let rotate = (nums, k) => {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop()) 
    }
    console.log(nums);
};

rotate(nums, 3);

let numbers = [1,2,3,4,5,6,7];
((numbers, k)=>{
   for (let i = 0; i < k; i++) {
        numbers.unshift(numbers.pop()) 
    }
    console.log(numbers); 
})(numbers, 3)