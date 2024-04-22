/*
    ', ", `

    let html = '<div class = "box_title">제목 영역</div>';
    let descript = "It's 3 o' clock";

    let name = 'Mike';
    let result = `My name is ${name}.`;
    let add = `2 더하기 3은 ${2+3}입니다.`;

    백틱은 여러 줄로 작성된 문자열을 알아서 인식하나, 따옴표의 경우 개행 문자가 추가되어야 한다.
    
*/

let desc = '안녕하세요';
console.log(desc.length);
console.log(desc[2]);

// 위와 같이 접근은 가능하나, 값을 바꾸려하면 반응하지 않는다.
// 읽기 전용 공간에 접근하는 행동이라 언어 차원에서 막아둔 것으로 보인다.

// desc.toUpperCase();
// desc.toLowerCase();

desc.indexOf('to');     // 실패시 -1 반환
desc.indexOf('man');
if(desc.indexOf('Hi')){
    // 제로 베이스이기 때문에 Hi가 맨 앞에 있을 경우
    // 이 분기문은 실행되지 않는다.
    // 따라서, desc.indexOf(Hi) > -1 의 조건을 달아주는 것이 옳은 방법이다.
}

// str.slice(n, m);     m은 닫힌 공간이며, 생략 가능하다. 만약 -1을 대입할 경우 끝에서부터 반대로 탐색한다.
let str = "AbCdEfGh";
console.log(str.slice(2));        // CdEfGh
console.log(str.slice(0, 5));     // AbCdE
console.log(str.slice(2, -2));   // CdEf

console.log(str.substring(2,5));
console.log(str.substring(5,2));

console.log(str.substr(2, 4));
console.log(str.substr(-4, 2));

// 공백 제거
str.trim();

// 반복
str.repeat(5);

// 비교시 ASCII 값 활용

// includes 메소드는 있으면 true, 없으면 false를 반환
