function CountUniqueValues(array){
    if(array.length === 0){return 0;}

    let i=0;
    for(let j=1; j<array.length; j++){
        if(array[i] !== array[j]){
            i++;
            array[i] = array[j];
        }
    }

    return i + 1;
}

// after sorting, function call
let ar = [1,2,1,3,4,3,5,6,7,6];
console.log(CountUniqueValues(ar.sort()));
