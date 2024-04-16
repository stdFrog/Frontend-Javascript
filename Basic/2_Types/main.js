///////////////////////////////////////////////////////////////
const Name = "Mike";                        // String
const Age = 30;                             // int
const babo = "서른 마흔 다섯";              // String

const Message = `My name is ${Name}`;
const Message2 = `나는 ${Age+1}살 입니다.`;
const Message3 = `나는 ${babo}살 입니다.`;

console.log(Message);
console.log(Message2);
console.log(Message3);
///////////////////////////////////////////////////////////////
const PI = 3.14159265358978;                // Real Number(double type)
const TwoPI = PI * 2.0;

const Angle = 30.0;
const Radian = Angle * PI / 180.0;
const Radius = 2.0;
const Sector = 0.5 * Radius * (Radian * Radius);

console.log(PI);
console.log(TwoPI);
console.log(Angle);
console.log(Radian);
console.log(Radius);
console.log(Sector);
///////////////////////////////////////////////////////////////
const bChoice = true;                       // Boolean
if(bChoice){
    // TRUE
    console.log(`bChoice is ${bChoice}`);
}else{
    // FALSE
    console.log(`bChoice is not true`);
}
///////////////////////////////////////////////////////////////
var age;                                    // undefined, null
if(age == undefined){
    console.log(`age is undefined`);
}else if(age == null){
    console.log(`age is null`);
}
///////////////////////////////////////////////////////////////
console.log(`age type is ` + typeof(age));
console.log(`bChoice type is ` + typeof(bChoice));
console.log(`PI type is ` + typeof(PI));
console.log(`Message type is ` + typeof(Message));
