/*
let ar = [
  8,2,4,7,5,3,1,9,55,43,22,101,98,33,72,27,10,6,0,26,131,123,220
];

let ch = [];

function MergeSort(left, right){
  if(left < right){
    let mid = left + right >> 1;

    MergeSort(left, mid);
    MergeSort(mid+1, right);

    let p1,p2,p3;
    p1 = left;
    p3 = left;
    p2 = mid+1;

    while(p1 <= mid && p2 <=right){
      if(ar[p1] < ar[p2]){ch[p3++] = ar[p1++];}
      else{ch[p3++] = ar[p2++];}
    }

    while(p1<=mid){ch[p3++] = ar[p1++];}
    while(p2<=right){ch[p3++] = ar[p2++];}

    for(let i =left; i<=right; i++){
      ar[i] = ch[i];
    }
  }

  return ar;
}
*/

function merge(ar1, ar2){
  let result = [];
  let i=0,j=0;

  while(i < ar1.length && j < ar2.length){
    if(ar2[j] > ar1[i]){
      result.push(ar1[i]);
      i++;
    }else{
      result.push(ar2[j]);
      j++;
    }
  }

  while(i < ar1.length){result.push(ar1[i]); i++}
  while(j < ar2.length){result.push(ar2[j]); j++}

  return result;
}

function mergeSort(ar1){
  if(ar1.length <= 1) {return ar1;}
  let mid = Math.floor(ar1.length/2);
  let left = mergeSort(ar1.slice(0,mid));
  let right = mergeSort(ar1.slice(mid));
  return merge(left, right);
}

// console.log(MergeSort(0,ar.length-1));
console.log(mergeSort([10,24,30,22,17,6]));
