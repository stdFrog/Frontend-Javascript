function Hash(key, arrayLen){
    let total = 0;
    for(let char of key){
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}

function RefactHash(key, arrayLen){
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i=0; i<Math.min(arrayLen,100); i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }

    return total;
}

console.log(RefactHash("Hello", 13));
