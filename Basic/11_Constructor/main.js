/*
    객체 리터럴 구문을 본 적 있을 것이다.

    하나의 대상만을 지원한다고 가정한다면 이 구문으로도 충분하지만,
    같은 종류의 여럿을 대상으로 서비스를 지원해야 할 경우 이 구문만으론 충분하지 않다.

    해서 생성자 함수가 언어 차원에서 제공된다.
    정확히는 할당자 또는, 할당 연산자를 지원한다.
*/

function User(name, age){
    // this = {}                /* new 연산자의 동작과 동일하다. */

    this.name = name;
    this.age = age;

    // return this;
}

let M = new User("stdsic", 30);
console.log(M);
