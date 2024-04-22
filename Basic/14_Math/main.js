/*
    10진수를 2진수나 16진수로 변경하는 메소드를 지원한다.


    let num = 10;
    num.toString(2);
    num.toString(16);

    위 메소드를 이용하면 전달한 진수로 변환하여 문자열을 반환한다.
*/

console.log(Math.PI);

let num1 = 5.1;
let num2 = 5.7;

console.log(Math.ceil(num1));
console.log(Math.floor(num1));
console.log(Math.round(num1));

console.log(Math.ceil(num2));
console.log(Math.floor(num2));
console.log(Math.round(num2));

// 주의할 것은 문자열로 반환하기 때문에 값을 사용하기 위해선 타입을 변환해 사용해야 한다.
let x = NaN;
let margin = '10px';

console.log(isNaN(x));
console.log(parseInt(margin));

let red = 'f3';
console.log(parseInt(red));
console.log(parseInt(red, 16));
console.log(parseInt('11', 2));

let padding = '18.5';
console.log(parseFloat(padding));

// 0 ~ 1 사이의 무작위 생성
console.log(Math.random());
console.log(Math.floor(Math.random() * 100) + 1);

console.log(Math.max(1, -1, 2, -2, 10, -123124, 1221));
console.log(Math.min(1, -1, 2, -2, 10, -123124, 1221));
console.log(Math.abs(-2147483648));
console.log(Math.pow(2, 30));
console.log(Math.sqrt(2));
