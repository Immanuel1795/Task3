let myArray = ['imman', 'madam', 'antony', 'malayalam' ];   
let palindrom = (myArray=>{
    let palin = myArray.filter((ele, ind)=>{
        let curr = ele.split('').reverse().join('');
        if(ele === curr){
            console.log(myArray[ind]);
        }
    })
});

palindrom(myArray);

(myArray=>{
    let palin = myArray.filter((ele, ind)=>{
        let curr = ele.split('').reverse().join('');
        if(ele === curr){
            console.log(myArray[ind]);
        }
    })
})(myArray)