let myArray = ['i', 'am', 'coding']

let capsTitle = (myArray=>{
    

console.log(
myArray.map(titleCaps => 
titleCaps[0].toUpperCase() + titleCaps.substr(1).toLowerCase())
   .join(' ')

)
});

capsTitle(myArray);

(myArray=>{
    console.log(
myArray.map(titleCaps => 
titleCaps[0].toUpperCase() + titleCaps.substr(1).toLowerCase())
   .join(' ')

)
})(myArray)