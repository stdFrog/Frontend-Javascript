/*
    배열은 정렬 메소드가 기본적으로 제공된다.
*/

let array = [4,31,2,3,65,9,388,7,6,77];

array.sort(fn);
console.log(array)

function fn(a,b){
    return a-b;
}

array.sort((a,b)=>{
    return a-b;
});

console.log(array);

/*
   사용법이 어려워 Lodash 라이브러리를 많이 사용한다.
    실무에서 많이 사용되므로 한 번쯤 공부해보는 것이 좋다.
    https://lodash.com/

    _.sortBy(array);
*/

/*
    Reduce : 인수로 함수를 받으며 누적 계산값과 현재값을 넘기면 설정한 내용에 맞게 계산된 값을 리턴한다.

    .reduceRight : 같은 동작을 하지만 오른쪽에서 왼쪽으로 순회한다
*/

// 배열의 모든 수를 합친다
let arr = [1,2,3,4,5];

let result = 0;
arr.forEach(n =>{
    result += n;
});

console.log(result);

// 이 작업을 reduce가 대신한다.
let init = 0;
const ret = arr.reduce((acc, val)=>{
    return acc + val;
}, init);

console.log(ret);

let users = [
    {name : "U", age : 27},
    {name : "N", age : 10},
    {name : "I", age : 30},
    {name : "Jane", age : 32},
    {name : "Harry", age : 48},
    {name : "Steve", age : 65},
];

let res = users.reduce((prev, cur)=>{
    if(cur.age > 19){
        prev.push(cur.name);
    }

    return prev;
}, []);

console.log(res);
