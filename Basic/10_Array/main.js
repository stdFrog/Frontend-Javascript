var ar = ['월', '화', '수'];
ar.pop();
ar.push('목');
ar.unshift('금', '토', '일');
ar.shift();
console.log(ar);

console.log(ar.length);

// 배열 탐색시 in보단 of 사용하는 것이 유리하다.

for(let a of ar){
    console.log(a);
}
