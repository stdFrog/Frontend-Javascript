/*
   배열이나 문자열과 같은 일련의 데이터를 입력하거나
   특정 방식으로 연속적인 해당 데이터의 하위 집합을 찾을 때 유용하다.
 */

function MaxSubArraySum(array, N){
    let Max = 0, Temp = 0;

    for(let i=0; i<N; i++){
        Temp += array[i];
    }

    Max = Temp;

    for(let j=N; j<array.length; j++){
        Temp = Temp + (array[j] - array[j-N]);
        if(Max < Temp){Max = Temp;}
    }

    return Max;
}

console.log(MaxSubArraySum([1,5,2,3,4,9], 2));

function MaxSubArraySum2(array, N){
    if(N > array.length){return null;}

    let Max = -Infinity;
    for(let i=0; i < arr.length - N + 1; i++){
        let Temp = 0;

        for(let j=0; j<N; j++){
            Temp += array[i+j];
        }

        if(Temp > Max){
            Max = Temp;
        }
    }

    return Max;
}

// console.log(MaxSubArraySum2([1,2,5,2,8,1,5], 2));
console.log(MaxSubArraySum([1,5,2,3,4,9], 2));
