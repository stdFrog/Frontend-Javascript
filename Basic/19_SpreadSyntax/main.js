/*
    전개 구문(Spread Syntax)에 대해 알아보기 전에 먼저, 나머지 매개변수가 무엇인지 알아보자.

    자바스크립트는 언어 특성상 함수로 전달되는 인수에 대하여 그 범위를 제한하지 않는다.
    이는 곧, 함수로 전달된 인수가 함수의 원형과 다를 수 있다는 것이다.

    다음 예시를 보자.
    function fn(x) { return (((x) > 0) ? parseInt(Math.log10(x) + 1) : 1); }

    함수 fn은 인수를 하나만 받는다.
    그런데 다음과 같은 호출들이 가능하다.

    fn(3.1415926535897932384626, 11, 2147483647);
    fn("이얏호");

    위처럼 명백한 오류에도 자바스크립트는 아무런 제지를 하지 않는다.

    함수의 인수에 대하여 아무런 체크도 하지 않는 특성은 내부적 요인으로 보인다.
    아마, 가변 인수를 활용하는 것이 아닌가 싶은데 자유도가 높은만큼 이로인해 생기는 오류도 적지 않다고 한다.

    자바스크립트는 이러한 오류를 줄이기 위해 arguments라는 지역 객체를 지원한다.
    이 객체는 배열을 원형으로 하지만, 배열 고유의 내장 메서드는 지원하지 않으며 함수 내에서만 활용할 수 있다.

    곧, 지역 변수로써 컴파일 시점 즉, 호이스팅 시점에서야 할당되는 것으로 보인다.
    이 객체를 이용하면 함수로 전달된 인수에 안전하게 접근할 수 있다.

    이와 같은 용도로 버전이 업그레이드 되면서 추가된 구문이 나머지 매개변수(Rest parameters)이다.
    일단 예시를 보자.

    function ShowWindow(...Handle){
        console.log(Handle);
    }

    function Hash(string){
        let H = 5381;
        let Ch;

        while(Ch = string++){
            H = ((H << 5) + H) + Ch;
        }

        return H;
    }

    ShowWindow();
    ShowWindow(0xf437, Hash("SubClassing"));
    ShowWindow(Hash("MainWindow"));


*/

function fn(x) { return (((x) > 0) ? parseInt(Math.log10(x) + 1) : 1); }

console.log(fn(3.1415926535897932384626, 11, 2147483647));
console.log(fn("이얏호"));
console.log(fn(Math.pow(2, 31)));

function ShowWindow(...Handle){
    console.log(Handle);
}

function Hash(string){
    let H = 5381;
    let i=0;
    while(i < string.length){
        H = ((H << 5) + H) + string[i++];
    }

    return H;
}

ShowWindow();
ShowWindow(0xf437, Hash("SubClassing"));
ShowWindow(Hash("MainWindow"));

