class Fibo{
    constructor(){
        this.values = [];
        this.A = [[],[]];
        this.memo = [];
    }

    Multiply(D,E){
        let C = [[],[]];

        C[0][0] = D[0][0] * E[0][0] + D[0][1] * E[1][0];
        C[0][1] = D[0][0] * E[0][1] + D[0][1] * E[1][1];
        C[1][0] = D[1][0] * E[0][0] + D[1][1] * E[1][0];
        C[1][1] = D[1][0] * E[0][1] + D[1][1] * E[1][1];

        return C;
    }

    Matrix(n){
        if(n > 1){
            this.A = this.Matrix(n>>1);  // Power
            this.A = this.Multiply(this.A, this.A);
            
            if(n & 1){
                let B = [[1,1],[1,0]];
                this.A = this.Multiply(this.A, B);
            }
        }

        return this.A;
    }

    fibo(n){
        this.A[0][0] = 1;
        this.A[0][1] = 1;
        this.A[1][0] = 1;
        this.A[1][1] = 0;

        this.A = this.Matrix(n);
        return this.A[0][1];
    }

    Dynamic(n){
        this.values[0] = 0;
        this.values[1] = 1;

        for(let i=2; i<=n; i++){
            this.values[i] = this.values[i-1] + this.values[i-2];
        }

        return this.values[n];
    }

    Recursive(n){
        if(this.memo[n] !== undefined){return this.memo[n];}
        if(n <= 2){return this.memo[n] = 1;}
        return this.memo[n] = this.Recursive(n-1) + this.Recursive(n-2);
    }
}

let ex = new Fibo();

console.log(ex.Recursive(100));
console.log(ex.Dynamic(10000));
console.log(ex.fibo(10000));
