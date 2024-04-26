function SelectionSort(ar){
  const swap = (ar, idx1, idx2)=>{
    [ar[idx1], ar[idx2]] = [ar[idx2], ar[idx1]];
  }

  var i,j, idx;
  for(i=0; i<ar.length-1; i++){
    idx = i;
    for(j=i+1; j<ar.length; j++){
      if(ar[idx] > ar[j]){
        idx = j;
      }
    }

    if(idx != i){swap(ar, idx, i);}
  }

  return ar;
}

console.log(SelectionSort([46,18,2,9,33]));
