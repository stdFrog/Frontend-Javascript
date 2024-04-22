// array.splice(n,m) : 특정 요소를 지우고 추가할 수 있다.
// 리턴값으로 삭제된 요소를 반환한다.

let ar = [1,2,3,4,5,6];
ar.splice(1,2);
console.log(ar);

ar.splice(0,1,10);
console.log(ar);

let deletelist = ar.splice();
console.log(deletelist);

// array.slice(n,m) : n부터 m까지 반환
console.log(ar.slice(1,4));
console.log(ar.slice());

// array.concat(ar2, ar3) : 합쳐서 새 배열을 반환한다.
let Prev = [1,2];
console.log(Prev.concat([3,4]));
console.log(Prev.concat([3,4], [5,6]));
console.log(Prev.concat([3,4], 5, 6));

// array.forEach(fn) : 배열의 요소를 지정된 형태로 반환한다.
// forEach((item, index, arr))로 형태가 정해져 있으며 곧, 값과 순서, 배열 자체를 반환한다.
// 아래 예시를 보자.

let array = ['Mike', 'Tom', 'Jane'];

array.forEach((name, index) => {
    console.log(`${index + 1}, ${name}`);
});

// array.indexOf(n, m), arr.lastIndexOf(n) : m은 생략할 수 있으며 시작 번호를 의미한다. 곧, m번자리에서 검색을 시작한다.
// array.includes(n) : 포함할 때 true, 없으면 false
// array.find(fn) : 찾으면 true, 없으면 undefined 반환
// array.findIndex(fn) : 찾으면 인덱스 반환 없으면 -1 반환

let test = [1,2,3,4,5];
const result = test.find((item) => {
    return item % 2 === 0;
});

console.log(result);

let users = [
    {name : "Mike", age: 30},
    {name : "Jane", age: 27},
    {name : "Tom", age: 10}
];

const ret = users.findIndex((user)=>{
    if(user.age < 19){
        return true;
    }

    return false;
});

console.log(ret);

// filter : 조건에 맞는 모든 요소를 찾아 배열로 반환한다.
const res = test.filter((item)=>{
    return item % 2 === 0;
});

console.log(res);

// array.reverse() : 역순으로 재정렬
// array.map(fn) : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환한다.               이 메소드가 실무에서 가장 많이 사용된다고 한다.

let newUsers = users.map((user, index) =>{
    return Object.assign({}, user, {
        id : index + 1,
        isAdult : user.age > 19,
    });
});

console.log(newUsers);

// array.join(token) : 배열의 값을 합쳐서 문자열을 만든다.
let Text = ["안녕", "나는", "짱구야"];
let newRet = Text.join("-");
console.log(newRet);

// array.split(token) : token으로 문자열을 나누어 배열로 반환한다.
let string = "Hello, World!";
let newString = string.split(",");
console.log(newString);

// array.isArray() : 배열인지 확인한다.
let temp = {
    Name: "ttt",
    Age: 19,
};
console.log(typeof temp);
console.log(typeof newUsers);
console.log(Array.isArray(temp));
console.log(Array.isArray(newUsers));

