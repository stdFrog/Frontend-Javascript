// 화살표 함수는 자신만의 this를 가지지 않는다
// 화살표 함수 내부에서 this를 사용하면 전역 객체를 가리키게 된다.

// 전역 객체는 브라우저 환경에선 windows, node js에선 global이 된다.

/////////////////////////////////////////////////////////////
let superman = {
    name : 'clark',
    age : 33,

    signature : function(){
        console.log(`Hello, I'm ${this.name}!`);
    },

    ShowName : function(){
        console.log(this.name);
    },

    SayThis : () => {
        console.log(this);
    },
};

superman.signature();
/////////////////////////////////////////////////////////////
let man = superman;
superman = null;

man.ShowName();
/////////////////////////////////////////////////////////////
man.SayThis();                          // node js global
