function Print_var() {
    {
        var t = "Function Level Scope";
    }
    console.log(t);
}

function Print_let(){
    {
        // 중괄호를 풀면 에러가 없어진다.
        let t = "Block Level Scope";
    }

    console.log(t);
}

Print_var();
Print_let();
