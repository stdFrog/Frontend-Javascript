function Count(Str){
    var Obj = {};

    for(var char of Str){
        if(isAlphaNumeric(char)){
            char = char.toLowerCase();
            Obj[char] = ++Obj[char] || 1;
        }
    }

    return Obj;
}

function Count2(Str){
    var Obj = {};
    let Re = /[a-z0-9]/;

    for(let i=0; i<Str.length; i++){
        let chars = Str[i].toLowerCase();
        if(Re.test(chars)){
            if(Obj[chars] > 0){
                Obj[chars]++;
            }else{
                Obj[chars] = 1;
            }
        }
    }

    return Obj;
}

console.log(Count2("Hello World"));
