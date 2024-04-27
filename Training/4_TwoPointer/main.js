function SumZero(array){
    for(let i=0; i<array.length; i++){
        for(let j=i+1; j<array.length; j++){
            if(array[i] + array[j] === 0){
                return [array[i], array[j]];
            }
        }
    }
}

function ReferenceSumZero(array){
    let left = 0;
    let right = array.length - 1;

    while(left < right){
        let Sum = array[left] + array[right];
        if(Sum > 0){
            right--;
        }else if(Sum < 0){
            left++;
        }else{
            return [array[left], array[right]];
        }
    }
}

console.log(SumZero([-3, -2, -1, 0, 1, ,2, 3]));
console.log(ReferenceSumZero([-3, -2, -1, 0, 1, 2, 3]));
