/*
   // Keyword
class Person{
    constructor(Name, Age, Male){
        this.Name = Name;
        this.Age = Age;
        this.Male = Male;
    }
}

let PersonOne = new Person("stdsic", 30, "M");
let PersonTwo = new Person("Emile", 30, "W");

console.log(PersonOne);
console.log(PersonTwo);
*/

/*
   // Instance Method
class Person{
    constructor(Name, Age, Male, Equity, Debt){
        this.Name = Name;
        this.Age = Age;
        this.Male = Male;
        this.Equity = Equity;
        this.Debt = Debt;
    }
    
    GetName(){
        return console.log(`My Name Is = ${this.Name}`);
    }

    GetEquity() {
        return console.log(`Equity = ${this.Equity}`);
    }

    GetDebt(){
        return console.log(`Debt = ${this.Debt}`);
    }
}



let PersonOne = new Person("stdsic", 30);
let PersonTwo = new Person("Emile", 30, "W", 1000, null);

PersonOne.GetName();
PersonTwo.GetEquity();

console.log(PersonOne);
console.log(PersonTwo);
*/

// Class Method
class Person{
    static num = 10;

    constructor(Name, Age, Male, Equity, Debt){
        this.Name = Name;
        this.Age = Age;
        this.Male = Male;
        this.Equity = Equity;
        this.Debt = Debt;
    }
    
    GetName(){
        return console.log(`My Name Is = ${this.Name}`);
    }

    GetEquity() {
        return console.log(`Equity = ${this.Equity}`);
    }

    GetDebt(){
        return console.log(`Debt = ${this.Debt}`);
    }

    static GetCount(){
        return console.log(`Person Instance Count = ${this.num}`)
    }
}

// 할당된 변수가 아니라 클래스 자체로부터 함수를 호출했다는 점을 잘 봐둬야 한다
Person.GetCount();
