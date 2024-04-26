function InsertionSort(ar){
  const swap = (ar, idx1, idx2)=>{
    [ar[idx1], ar[idx2] = ar[idx2], ar[idx1]];
  }

  let i,j,key;
  for(i=1; i<ar.length; i++){
    key = ar[i];
    for(j=i; j>0; j--){
      if(ar[j-1] > key){
        ar[j] = ar[j-1];
      }else{
        break;
      }
    }
    ar[j] = key;
  }

  return ar;
}

console.log(InsertionSort([18,9,2,22,7]));
