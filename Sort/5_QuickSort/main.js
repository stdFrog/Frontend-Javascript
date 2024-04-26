let arr = [
  4,2,3,1,5,6,7,8,19,22,7,6,8,0,20,11,17,9,10
];

function QuickSort(ar, left, right){
  const swap = (ar, idx1, idx2) => {
    [ar[idx1], ar[idx2]] = [ar[idx2], ar[idx1]];
  };

  let i = left, j = right, key = ar[Math.floor((left+right)/2)];

  while(i<=j){
    while(key < ar[j]){j--;}
    while(key > ar[i]){i++;}

    if(i<=j){
      /*
      tmp = ar[i];
      ar[i] = ar[j];
      ar[j] = tmp;
      */
      // swap(ar, i, j);

      if(ar[i]!==ar[j]){
        ar[j]^=ar[i];
        ar[i]^=ar[j];
        ar[j]^=ar[i];
      }
      i++; j--; 
    }
  }

  if(i < right){QuickSort(ar, i, right);}
  if(j > left){QuickSort(ar, left, j);}

  return ar;
}

console.log(QuickSort(arr, 0, arr.length-1));
