function bubbleSort(ar){
  var flag = 0;
  for(var i=ar.length; i>0; i--){
    flag = 0;
    for(var j=0; j<j-1; j++){
          if(ar[j] > ar[j+1]){
            var n = ar[j-1];
            ar[j-1] = ar[j];
            ar[j] = n;
            flag = 1;
          }
      }
      if(flag === 0){break;}
  }

  return ar;
}

function bubblesort(ar){
  const swap = (ar, idx1, idx2)=>{
    [ar[idx1], ar[idx2]] = [ar[idx2], ar[idx1]];
  };


  for(let i=ar.length; i>0; i--){
    for(let j=0; j<i-1; j++){
      if(ar[j] > ar[j+1]){
        swap(ar, j, j+1);
      }
    }
  }
  return ar;
}

console.log(bubblesort([37,45,29,8]));
