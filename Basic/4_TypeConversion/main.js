// Type Cast

// 자바스크립트는 굉장히 친절한 언어라 타입간의 형변환을 자동으로 수행한다.
// 해서 의도치 않은 결과를 낼 수 있는데, 대부분 문자형에 대한 연산이다.

// 다행히 명시적 형변환도 지원하므로 아래 구문만 잘 알아두면 실수할 일이 줄어들 것이다.

///////////////////////////////////////////////////////
console.log(
            String(3),
            String(true),
            String(null),
            String(2147483647),
        );
///////////////////////////////////////////////////////
console.log(
            Number("2147483647"),
            Number(true),
            Number(false),
        );
///////////////////////////////////////////////////////
console.log(
            Boolean("1"),                   // true
            Boolean(""),                    // false
            Boolean(1),                     // true
            Boolean(0),                     // false
        );
///////////////////////////////////////////////////////
