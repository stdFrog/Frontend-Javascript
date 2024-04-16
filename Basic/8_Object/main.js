//////////////////////////////////////////////////////
const name = 'clark';
const age = 33;
//////////////////////////////////////////////////////
                            // Object - 단축 프로퍼티
const superman = {
    name,           // name : name,
    age,            //age : age,
    gender : 'male',
}
//////////////////////////////////////////////////////
                            // Object - 존재 여부 확인
superman.birth              // undefined
'birth' in superman;        // false
'age' in superman;          // true
//////////////////////////////////////////////////////
console.log(superman.name);
console.log(superman['age']);

superman.hair = "skinhead";
superman['girlfriend'] = 'wonder women';

console.log(superman);

delete superman.age;
console.log(superman);
//////////////////////////////////////////////////////
function CreateObject(name, age){
    return {
        name,           // name : name,
        age,            //age : age,
        hobby : 'football'
    };
}

const Mike = CreateObject('Mike', 30);
console.log(Mike);

console.log('age' in Mike);
console.log('birth' in Mike);
//////////////////////////////////////////////////////
for(hash in Mike){
    console.log(Mike[hash]);
}
//////////////////////////////////////////////////////
