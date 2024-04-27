function ValidAnagram(Source, Dest){
    if(Dest === Source){return true;}
    else{
        if(Dest.length !== Source.length){return false;}

        let D = {};
        for(let i=0; i<Dest.length; i++){
            let letter = Dest[i];

            D[letter] ? D[letter] += 1 : D[letter] = 1;
        }

        for(let i=0; i<Source.length; i++){
            let letter = Source[i];
            if(!D[letter]){
                return false;
            }else{
                D[letter] -= 1;
            }
        }
    }

    return true;
}

console.log(ValidAnagram("lleoH orWld", "Hello World"));
