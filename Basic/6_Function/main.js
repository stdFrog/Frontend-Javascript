var ar[] = {1, 2, 3, 4, 5};

function add(ar[], size){
    if(size == 1){
        return list[0];
    }else{
        return add(&list[1], size - 1) + list[0];
    }
}
