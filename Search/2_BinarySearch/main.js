const test = [
  "Hello World", "Texas", "Function"
];

function BinarySearch(ar, str){
  let left,right,mid;

  left=0, right=ar.length-1;

  while(left <= right){
      mid = parseInt((left + right) / 2);
      if(ar[mid] === str){
        return mid;
      }else if(ar[mid] > str){
        right = mid-1;
      }else{
        left = mid+1;
      }
  }

  return -1;
}

console.log(BinarySearch(test, "Hello World"));
