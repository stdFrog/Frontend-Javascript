class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i=0; i<Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total;
    }

    set(key,value){
        let hash = this._hash(key);
        
        if(!this.keyMap[hash]){
            this.keyMap[hash] = [];
        }
        this.keyMap[hash].push([key, value]);
    }

    get(key){
        let hash = this._hash(key);

        if(this.keyMap[hash]){
            for(let i=0; i<this.keyMap[hash].length; i++){
                if(this.keyMap[hash][i][0] == key){
                    return this.keyMap[hash][i][1];
                }
            }
        }
        return undefined;
    }

    values(){
        let valuesArr = [];
        for(let i=0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j < this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1]){
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
    Keys(){
        let keysArr = [];
        for(let i=0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j < this.keyMap[i].length; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0]){
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }

}

let ht = new HashTable();

ht.set("hello world", "goodbye!!");

console.log(ht.keyMap);
console.log(ht.get("hello world"));
console.log(ht.keys());

ht.keys().forEach(function(key){
    console.log(ht.get(key));
})
