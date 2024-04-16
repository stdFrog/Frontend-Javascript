// 함수 선언문은 호이스팅(hoisting)으로 인해 문서의 어디서든 호출 가능한 상태가 되고,
// 함수 표현식 인터프리터 언어 특성을 그대로 가진다.

let add = function(num1, num2){
    return num1 + num2;
}

let add = (num1, num2) => (num1 + num2;)

let add = (num1, num2) => {
    // 한 줄의 코드가 아니라면 중괄호를 사용해야 한다.
    const result = num1 + num2;
    return result;
}

let Hello = (name) => `Hello, ${name}`;
let Hello2 = name => `Hello, ${name}`;

let show2 = () =>{
    alert(`error!`);
}
