// 1 ~ N까지의 합

function AddUpTo(N){
    return N * (N+1) / 2;
}

function AddUp(N){
    let Total = 0;
    for(let i=1; i<=N; i++){
        Total += i;
    }

    return Total;
}
