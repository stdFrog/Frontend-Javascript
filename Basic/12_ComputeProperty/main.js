/*
    계산된 속성이라는 이름의 신기한 기능이 있다.
    일단 구문을 보자.
*/

let a = "age";

const User = {
    Name : 'stdsic',
    age : 30
}

const User2 = {
    Name : 'stdsic',
    [a] : 30,
    gender : 'male',
}

/*
    위 두 가지 구문은 완전히 동일한 동작이다.
    
    대괄호 연산이 곧, 포인터 연산을 한다고 볼 수 있는데
    [a]라는 구문에서 대괄호 내부의 변수 a에 접근하여 값을 읽어온다.

    곧, 문자열 "age"는 변수의 이름으로 치환되고 콜론 연산으로 값을 대입한다.
*/

/*
   다음은 객체 메소드에 대해 알아보자.
   크게 5가지가 있다.

   - Object.assign();                   : 객체 복제
   - Object.keys();                     : 키만 가져옴
   - Object.values();                   : 값만 가져옴
   - Object.entries();                  : 키와 값을 가져옴
   - Object.fromEntries();              : 키와 값을 전달하면 객체로 만듦

    여기서 assign 메소드는 중요하다.
    자바스크립트 내부 구조상 변수는 참조 형태(포인터)를 가지므로 깊은 복사가 불가능하다.

    구조체 또는 클래스의 대입 연산을 떠올려보자.
    언어 차원에서 대입 연산을 어떻게 수행하는지 자세히 뜯어본다면 과연 다음과 같을 것이다.

    임의의 구조체 또는 클래스로부터 인스턴스화 된 변수 A,B가 있을 때,
    이 둘은 A = B와 같이 대입 연산이 가능하다.

    이는 곧, 컴파일러(또는 인터프리터)가 변수의 원본 타입을 읽고 오프셋을 이용하여 서로 대응되는 변수(번지)에 값을 대입해 넣기 때문이다.
    그런데, 앞에서 자바스크립트의 변수는 참조형이라고 했다.

    즉, 자바스크립트에서 대입해 넣는 값은 곧 변수의 번지가 되며 이는 하나의 공간을 두 변수가 공유한다는 의미이다.

    이러한 특성이 꽤 많은 문제를 발생시키는데 대표적으로 데이터 소실을 들 수 있으며, 데이터 변조, 데이터 삭제 등등
    외의 문제 역시 쉽게 떠올릴 수 있을 것이다. 

    객체끼리 복사할 경우가 생긴다면 assign을 습관적으로 사용하는 것이 데이터 유지/관리에 좋다.
*/

let P1 = Object.assign({name : 'Tom'}, User);
let P2 = Object.assign({name : 'James'}, User, User2);
console.log(Object.keys(P1));
console.log(Object.values(P1));
console.log(Object.entries(P1));

console.log(Object.keys(P2));
console.log(Object.values(P2));
console.log(Object.entries(P2));

const ar = [["Name", "StdSic"], ["Age", 30], ["Gender", "Male"]];
let P3 = Object.fromEntries(ar);
console.log(P3);
