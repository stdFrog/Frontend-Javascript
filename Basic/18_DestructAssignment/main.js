/*
    구조 분해 할당 : 이름만으로는 의미를 정확히 알기 어렵다. 일단 아래 예시를 보자.
                    > let users = ["MC Sniper", "Tom And Jerry", "Renderer"];

                    위는 일반적으로 자주 쓰이는 배열의 선언 구문이다.
                    구문을 보면 값을 대입받을 변수가 좌변에 오고, 우변에 할당할 값을 입력한다.

                    이는 상식적이고 자주 사용되는 방법이므로 더 이상의 설명이 필요없다.

                    그런데, 배열이 관리하는 값을 임의의 변수에 나누어 관리하고자 한다면 어떻게 할 수 있을까?
                    직관적으로 다음의 방법을 떠올릴 것이다.

                    let user1 = users[0];
                    let user2 = users[1];
                    let user3 = users[2];

                    물론, 개수가 많다면 루프를 활용할 수도 있다.
                    다만, 몇 개 되지도 않는 값을 대입하려고 for 루프를 쓴다거나 변수를 선언하는 구문을 여러 줄 쓰는게 꽤 번거롭다.

                    해서 자바스크립트는 다음과 같은 할당 구조도 허용한다.
                    let [user1, user2, user3] = users;

                    이를 처음보는 사람은 아마 다음과 같은 생각을 할 것이다.
                    대괄호는 접근자 또는 연산자로써의 역할을 하는데 주체도 없이 어찌 좌변에 위치해 있는가?

                    굉장히 생소한 구문이므로 충분히 그럴만하다.

                    자바스크립트는 대괄호 연산자를 피연산자로 하는 구문에 대하여 그 주체가 정해지지 않은 상태라면
                    이를 독립된 변수로 보고 우변에 위치한 값을 차례로 대입하는 구조를 갖는다.

                    곧, ar[0] = 1의 구문과 달리 [userID_1, userID_2] = [11, 22] 따위의 구문에서처럼
                    대괄호 좌측에 주체가 없는 상태라면 대괄호 내부의 값을 lvalue로 본다.

                    여기서 lvalue란, 메모리가 할당되어 독립적인 공간을 갖는 변수를 말한다.
                    
                    이 이상의 더 자세한 내용은 참고하기로 하고 중요한건 let의 선언자와 함께 할당자로서의 역할을 한다는 것이다.
                    구문에 따라 일부 반환값을 무시할 수도 있으며, 값을 교환할 수도 있고, 함수의 디폴트 인수처럼 기본값을 설정할 수도 있다.

                    아래 예시를 보자.
*/

let Message = "Hi, Mike I'm glad to meet U";

let Token = ' ';
let [SubString1, SubString2, SubString3] = Message.split(Token);

console.log(SubString1);
console.log(SubString2);
console.log(SubString3);

let a = 1;
let b = 2;
[a,b] = [b,a];

console.log(a,b);

let user = {name : "James", age : 30};
let {name, age} = user;
// let name = user.name;
// let age = user.age;

console.log(name);
console.log(age);

/*
    객체의 경우 프로퍼티와 동일한 이름을 사용할 수도 있고 변경할 수도 있으며, 그 순서를 신경쓰지 않아도 된다.
    예컨데, 다음과 같은 구문에서 굳이 순서를 신경쓰지 않아도 된다는 뜻이다.
*/

let ID_1 = {
    ID1_name : "Sic",
    ID1_age : 18,
};

let {ID1_age, ID1_name, ID1_gender = 'male'} = ID_1;

console.log(ID1_name);
console.log(ID1_age);
console.log(ID1_gender);

let {ID1_age: Age, ID1_name: Name} = ID_1;

console.log(Name);
console.log(Age);

/*
    참고로 undefined 값이 아니면 기본값은 사용되지 않는다.
*/
