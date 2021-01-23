let array = [8, 5 , 8, 'ban', 'hyy', 'ban', 'hyy'];

let removeDuplicates = (array=>{
    let unique = [];
    array.forEach(dups=>{
        if(!unique.includes(dups)){
            unique.push(dups);
        }
    
    })
    console.log(unique);
})

removeDuplicates(array);

(array=>{
    let unique = [];
    array.forEach(dups=>{
        if(!unique.includes(dups)){
            unique.push(dups);
        }
    
    })
    console.log(unique);
}) (array)