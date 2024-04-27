const ar = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 15, 17, 19, 22, 29, 31, 39, 43, 45,
    50, 51, 55, 57, 60, 66, 72, 78, 99, 2147483647
];

function BinarySearch(array, N){
    let left=0, right = array.length-1;

    while(left<=right){
        // Math.floor((left+right) / 2);
        let mid = left + right >> 1;

        if(array[mid] > N){
            right = mid - 1;
        }else if(array[mid] < N){
            left = mid + 1;
        }else{
            return mid;
        }
    }

    return -1;
}

console.log(BinarySearch(ar, 45));
